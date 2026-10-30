// Generates the Lua API typings ("../civ5-typings/src/api.d.ts") from the Civ5 modding wiki:
// https://modiki.civfanatics.com/index.php?title=Lua_and_UI_Reference_(Civ5)
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const wikiUrl = "https://modiki.civfanatics.com/index.php";
const referencePage = "Lua_and_UI_Reference_(Civ5)";
const globalsPage = "Global_Functions_(Civ5)";

// The raw wikitext of the pages, delete a file (or the folder) to download it again.
const wikiCache = resolve(import.meta.dirname, "wiki");
const apiFile = resolve(import.meta.dirname, "../civ5-typings/src/api.d.ts");

// Typed by hand: "GameInfo" and "GameInfoTypes" after the data set (see "classes.d.ts"), "GameDefines" in "extras.d.ts".
const handWritten = ["GameInfo", "GameInfoTypes", "GameDefines"];

// Methods returning an object that may not exist, the wiki does not tell.
const nullableReturns = new Set([
    "Player.GetCapitalCity",
    "Player.GetCityByID",
    "Player.GetUnitByID",
    "Map.GetPlot",
    "Map.GetPlotXY",
    "Map.GetPlotByIndex",
    "Plot.GetPlotCity",
    "Plot.GetWorkingCity",
]);

// Signatures the wiki gets wrong.
const signatureOverrides: Record<string, string> = {
    // The game leaves out the form.
    "Player.GetName": "(form?: string): string",
    // Not a string, the rows.
    "DB.Query": "(this: void, sql: string, ...args: any[]): LuaIterable<{ readonly [column: string]: any }>",
    // Booleans, not integers.
    "ControlBase.SetHide": "(hide: bool): void",
    "ControlBase.IsHidden": "(): bool",
};

// Static objects named like a JavaScript global: TypeScriptToLua handles "Map" as the JavaScript class.
// They are declared under another name, still compiled to theirs.
const renamed: Record<string, string> = {
    Map: "GameMap",
};

// Game events asking whether something is possible, the wiki often leaves out their return type.
// Every listener must return `true` for the action to be allowed (or one of them, for `TestAny` events).
const testEvent = /Can[A-Z]|Is[A-Z]/;

// TypeScript keywords that cannot name a parameter.
const reservedWords = new Set([
    "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export",
    "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super",
    "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "let", "static",
    "implements", "interface", "package", "private", "protected", "public", "await", "arguments", "eval",
]);

async function fetchPage(title: string): Promise<string> {
    const file = join(wikiCache, title + ".wiki");

    if (existsSync(file)) return readFile(file, "utf-8");

    console.log("Downloading " + title);

    const response = await fetch(`${wikiUrl}?title=${encodeURIComponent(title)}&action=raw`);

    if (!response.ok) throw new Error(`Could not download "${title}": ${response.status} ${response.statusText}`);

    const text = await response.text();

    await mkdir(wikiCache, { recursive: true });
    await writeFile(file, text);

    return text;
}

function typePage(type: string) {
    return `${type.replaceAll(" ", "_")}_(Civ5_Type)`;
}

// --- Wikitext ---

// The arguments of the template starting at `start` (at its "{{"), and the index after its "}}", nested templates and links included.
function templateAt(text: string, start: number): { args: string[], end: number } {
    const args: string[] = [];
    let depth = 0;
    let current = "";

    for (let i = start; i < text.length; i++) {
        const pair = text.slice(i, i + 2);

        if (pair === "{{" || pair === "[[") {
            depth++;
            if (depth > 1) current += pair;
            i++;
        } else if (pair === "}}" || pair === "]]") {
            depth--;
            if (depth === 0) {
                args.push(current);
                return { args, end: i + 2 };
            }
            current += pair;
            i++;
        } else if (text[i] === "|" && depth === 1) {
            args.push(current);
            current = "";
        } else {
            current += text[i];
        }
    }

    throw new Error("Unclosed template: " + text.slice(start, start + 100));
}

function decodeEntities(text: string) {
    return text.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
}

// Wikitext to the plain text of a doc comment.
function plainText(text: string): string {
    let result = text
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<syntaxhighlight[^>]*>([\s\S]*?)<\/syntaxhighlight>/g, "\n```lua\n$1\n```\n")
        .replace(/<br\s*\/?>/g, "\n");

    // Templates, innermost first.
    for (let previous = ""; previous !== result;) {
        previous = result;
        result = result.replace(/\{\{([^{}]*)\}\}/g, (_, content: string) => {
            const [name, ...args] = content.split("|").map(arg => arg.trim());

            switch (name) {
                case "Type5": return "`" + (args[1] ?? args[0]) + "`";
                case "Func5": return "`" + args.join(".") + "`";
                case "Table5": return "`" + args[0] + "`";
                case "Warning": return "Warning:";
                default: return "";
            }
        });
    }

    return decodeEntities(result
        .replace(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/g, "$1")
        .replace(/\[https?:\/\/\S+ ([^\]]*)\]/g, "$1")
        .replace(/'''(.*?)'''/g, "$1")
        .replace(/''(.*?)''/g, "_$1_")
        .replace(/<\/?code>/g, "`")
        .replace(/<[^>]+>/g, ""))
        .split("\n")
        .map(line => line.trim().replace(/^\*\s*/, "- ").replace(/^:+\s*/, ""))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function docComment(text: string, indent = ""): string {
    if (text.trim() === "") return "";

    const lines = text.replaceAll("*/", "*\\/").split("\n");

    if (lines.length === 1) return `${indent}/** ${lines[0]} */\n`;

    return `${indent}/**\n${lines.map(line => `${indent} * ${line}`.trimEnd()).join("\n")}\n${indent} */\n`;
}

// Top level ("=Title=") sections of a page.
function sections(text: string): { title: string, body: string }[] {
    const parts = text.split(/^=([^=].*?)=[ \t]*$/m);
    const result = [];

    for (let i = 1; i < parts.length; i += 2) {
        result.push({ title: parts[i].trim(), body: parts[i + 1] });
    }

    return result;
}

// --- Signatures ---

type Type =
    | { kind: "name", name: string }
    | { kind: "table", key: Type, value: Type }
    | { kind: "iterator", values: Type[] }
    | { kind: "function", returns: Type, params: Param[] }

type Param = { type: Type, name?: string, optional: boolean, rest: boolean }

type Func = {
    name: string,
    // `undefined` when the signature is unknown.
    params?: Param[],
    returns?: Type[],
    doc: string,
}

type Token = { kind: "type" | "word" | "punct", value: string }

function tokenize(code: string): Token[] {
    const source = decodeEntities(code)
        .replace(/<!--[\s\S]*?-->/g, " ")
        // Typos: "bool rebuildGraphics) = nil)".
        .replace(/(\w)\)(?= =|<b>\))/g, "$1")
        .replace(/<b>([()])<\/b>/g, "$1");

    const tokens: Token[] = [];
    const pattern = /\{\{Type5\|([^|}]+)(?:\|[^}]*)?\}\}|'''(.+?)'''|(\{\{UnknownSignature5\}\})|(=>|\.\.\.)|([A-Za-z_][\w.]*|-?\d+(?:\.\d+)?|"[^"]*")|(\S)/g;

    for (const match of source.matchAll(pattern)) {
        const [, type5, bold, unknown, arrow, word, punct] = match;

        if (type5 != null) tokens.push({ kind: "type", value: type5.trim() });
        else if (bold != null) tokens.push({ kind: "type", value: bold.trim() });
        else if (unknown != null) tokens.push({ kind: "word", value: "{{UnknownSignature5}}" });
        else if (arrow != null) tokens.push({ kind: "punct", value: arrow });
        else if (word != null) tokens.push({ kind: "word", value: word });
        else tokens.push({ kind: "punct", value: punct });
    }

    return tokens;
}

class Parser {
    private index = 0;
    private tokens: Token[];

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    peek(offset = 0): Token | undefined {
        return this.tokens[this.index + offset];
    }

    next(): Token {
        const token = this.tokens[this.index++];

        if (token == null) throw new Error("Unexpected end");

        return token;
    }

    is(value: string, offset = 0) {
        return this.peek(offset)?.value === value;
    }

    expect(value: string) {
        const token = this.next();

        if (token.value !== value) throw new Error(`Expected "${value}", got "${token.value}"`);
    }

    done() {
        return this.index >= this.tokens.length;
    }

    type(): Type {
        const token = this.next();

        if (token.kind === "word" && token.value === "table" && this.is("(")) {
            this.expect("(");
            const key = this.type();
            this.expect("=>");
            const value = this.type();
            this.expect(")");
            return { kind: "table", key, value };
        }

        if (token.kind === "word" && token.value === "iterator" && this.is("(")) {
            this.expect("(");
            const values = this.is(")") ? [] : this.types();
            this.expect(")");
            return { kind: "iterator", values };
        }

        // A callback: "(void func(params)) name".
        if (token.value === "(") {
            const returns = this.type();
            this.expect("func");
            this.expect("(");
            const params = this.params();
            this.expect(")");
            this.expect(")");
            return { kind: "function", returns, params };
        }

        if (token.kind === "type") return { kind: "name", name: token.value };

        throw new Error(`Expected a type, got "${token.value}"`);
    }

    types(): Type[] {
        const types = [this.type()];

        while (this.is(",")) {
            this.next();
            types.push(this.type());
        }

        return types;
    }

    params(): Param[] {
        const params: Param[] = [];

        if (this.is(")")) return params;

        do {
            if (params.length > 0) this.expect(",");

            if (this.peek()?.kind === "punct" && this.is("...")) {
                this.next();
                params.push({ type: { kind: "name", name: "unknown" }, optional: true, rest: true });
                continue;
            }

            const type = this.type();
            const rest = type.kind === "name" && type.name === "...";
            const name = this.peek()?.kind === "word" ? this.next().value : undefined;
            let optional = rest;

            // The default value, unused.
            if (this.is("=")) {
                optional = true;

                for (let depth = 0; !this.done() && !(depth === 0 && (this.is(",") || this.is(")")));) {
                    const token = this.next();

                    if (token.value === "(") depth++;
                    if (token.value === ")") depth--;
                }
            }

            params.push({ type: rest ? { kind: "name", name: "unknown" } : type, name, optional, rest });
        } while (this.is(","));

        return params;
    }
}

// The comment and signature of each function of a section, as listed with the "FuncInfos5" and "FuncLabel5" templates.
function parseFunctions(body: string, page: string): Func[] {
    const funcs: Func[] = [];

    for (let start = body.indexOf("{{FuncInfos5|"); start !== -1; start = body.indexOf("{{FuncInfos5|", start + 1)) {
        const { args, end } = templateAt(body, start);
        const [, base, gk, , comment = ""] = args.map(arg => arg.trim());
        const rows = body.slice(end).match(/^\s*\|align="right"\s*\|<code>(.*?)<\/code>\s*\n\|width="100%"\s*\|<code>(.*)<\/code>/);

        if (rows == null) {
            console.log(`WARNING: No signature after a function comment of "${page}"`);
            continue;
        }

        const [, returnCode, signatureCode] = rows;
        const label = signatureCode.match(/\{\{FuncLabel5\|(?:[^|}]*\|)?([^|}]+)\}\}(.*)$/);

        if (label == null) {
            console.log(`WARNING: No function name in "${signatureCode}" of "${page}"`);
            continue;
        }

        const [, name, argsCode] = label;
        const notes = [plainText(comment)];

        if (base === "no") notes.push("Only in Gods & Kings.");
        if (gk === "no") notes.push("Not in Gods & Kings.");

        const func: Func = { name: name.trim(), doc: notes.filter(Boolean).join("\n\n") };

        if (!returnCode.includes("{{UnknownSignature5}}")) {
            try {
                const returns = new Parser(tokenize(returnCode));
                const params = new Parser(tokenize(argsCode));

                func.returns = returns.done() ? [] : returns.types();
                params.expect("(");
                func.params = params.params();
                params.expect(")");

                if (!returns.done() || !params.done()) throw new Error("Unexpected trailing tokens");
            } catch (e) {
                console.log(`WARNING: Unknown signature for ${page}.${name}, ${(e as Error).message}: ${returnCode} ${argsCode}`);
                func.returns = func.params = undefined;
            }
        }

        funcs.push(func);
    }

    return funcs;
}

// --- Pages ---

type Field = { name: string, type: Type, doc: string }

type Enum = { name: string, keys: string[], dynamic: boolean }

type Page = {
    name: string,
    doc: string,
    // A pseudo-type that is actually an integer.
    isInteger: boolean,
    isLuaObject: boolean,
    staticMethods: Func[],
    instanceMethods: Func[],
    events: Func[],
    fields: Field[],
    enums: Enum[],
    // Inherited methods, by name of the base type.
    bases: Map<string, Func[]>,
}

function parseFields(body: string, page: string): Field[] {
    const fields: Field[] = [];

    for (const match of body.matchAll(/\{\{PseudoH4\|([^}]+)\}\}\s*\n:Type:(.*)\n(?::Usage:(.*))?/g)) {
        const [, name, typeCode, usage = ""] = match;
        let type: Type = { kind: "name", name: "unknown" };

        try {
            type = new Parser(tokenize(typeCode)).type();
        } catch (e) {
            console.log(`WARNING: Unknown type for field ${page}.${name}: ${typeCode}`);
        }

        fields.push({ name: name.trim(), type, doc: /^\s*Unknown\.?\s*$/.test(usage) ? "" : plainText(usage) });
    }

    return fields;
}

function parseEnum(title: string, body: string): Enum | undefined {
    const name = title.match(/^Lua: the (\w+) enumeration$/)?.[1];

    if (name == null) return undefined;

    const keys = Array.from(new Set(Array.from(body.matchAll(/^\|align="left" \|"([^"]+)"\s*$/gm), match => match[1])));

    // Enumerations of database rows do not get the rows added by mods.
    return { name, keys, dynamic: body.includes("{{Warning}}") };
}

function parsePage(name: string, text: string, luaObjects: Set<string>): Page {
    const infos = text.indexOf("{{TypeInfos5|");
    const doc = infos === -1 ? "" : plainText(templateAt(text, infos).args[2] ?? "");

    const page: Page = {
        name,
        doc,
        isInteger: infos !== -1 && templateAt(text, infos).args[1].trim() === "ID.png",
        isLuaObject: luaObjects.has(name),
        staticMethods: [],
        instanceMethods: [],
        events: [],
        fields: [],
        enums: [],
        bases: new Map(),
    };

    for (const { title, body } of sections(text)) {
        const base = title.match(/^Inherited from (\w+)$/)?.[1];
        const enumeration = parseEnum(title, body);

        if (base != null) {
            page.bases.set(base, parseFunctions(body, base));
        } else if (enumeration != null) {
            page.enums.push(enumeration);
        } else if (title === "Static Methods") {
            // Those of "GameEvents" and "LuaEvents" are the methods of their events, see "GameEvent" in "extras.d.ts".
            if (name !== "GameEvents" && name !== "LuaEvents") page.staticMethods.push(...parseFunctions(body, name));
        } else if (title === "Instance Methods" || title === "New Instance Methods") {
            page.instanceMethods.push(...parseFunctions(body, name));
        } else if (title === "Static Events" || title === "Events declared by the UI") {
            page.events.push(...parseFunctions(body, name));
        } else if (title === "Fields") {
            page.fields.push(...parseFields(body, name));
        }
    }

    return page;
}

// --- Generation ---

const primitives: Record<string, string> = {
    int: "int",
    integer: "int",
    float: "float",
    bool: "bool",
    string: "string",
    void: "void",
    table: "LuaTable",
    unknown: "any",
    variant: "any",
    "...": "any",
};

class Generator {
    // Types declared as an interface or alias, and static objects (namespaces).
    readonly types = new Set<string>();
    readonly namespaces = new Set<string>();
    readonly missing = new Set<string>();

    typeName(name: string): string {
        if (Object.hasOwn(primitives, name)) return primitives[name];

        // A row of a database table, e.g. "Civilizations.row".
        const row = name.match(/^(\w+)\.row$/);

        if (row != null) return `DataSetTable<ActiveDataSet, "${row[1]}">`;
        if (this.types.has(name)) return name;
        if (this.namespaces.has(name)) return `typeof ${renamed[name] ?? name}`;

        this.missing.add(name);
        return name;
    }

    type(type: Type): string {
        switch (type.kind) {
            case "name":
                return this.typeName(type.name);
            case "table":
                return `LuaTable<${this.type(type.key)}, ${this.type(type.value)}>`;
            case "iterator":
                return `LuaIterable<${this.returns(type.values, "any")}>`;
            case "function":
                return `((${this.params(type.params)}) => ${this.type(type.returns)})`;
        }
    }

    returns(types: Type[], none = "void"): string {
        if (types.length === 0) return none;
        if (types.length === 1) return this.type(types[0]);

        return `LuaMultiReturn<[${types.map(type => this.type(type)).join(", ")}]>`;
    }

    params(params: Param[], self = "this: void"): string {
        const names = new Set<string>();
        // Only the trailing parameters can be optional, and only the last one can be a rest parameter.
        const required = params.findLastIndex(param => !param.optional);

        const list = params.map((param, i) => {
            let name = param.name != null && /^[A-Za-z_$][\w$]*$/.test(param.name) ? param.name : `arg${i}`;

            if (reservedWords.has(name)) name += "_";
            while (names.has(name)) name += "_";
            names.add(name);

            const type = this.type(param.type);

            if (param.rest && i === params.length - 1) return `...${name}: ${type}[]`;

            return `${name}${param.optional && !param.rest && i > required ? "?" : ""}: ${type}`;
        });

        return [self, ...list].filter(Boolean).join(", ");
    }

    signature(owner: string, func: Func, self: string, returns?: string): string {
        if (Object.hasOwn(signatureOverrides, `${owner}.${func.name}`)) return signatureOverrides[`${owner}.${func.name}`];

        if (func.params == null || func.returns == null) return `(${[self, "...args: any[]"].filter(Boolean).join(", ")}): any`;

        let returnType = returns ?? this.returns(func.returns);

        if (nullableReturns.has(`${owner}.${func.name}`)) returnType += " | undefined";

        return `(${this.params(func.params, self)}): ${returnType}`;
    }

    memberName(name: string) {
        return /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
    }

    // Methods called with a colon.
    methods(owner: string, funcs: Func[], indent: string): string {
        const seen = new Set<string>();
        let text = "";

        for (const func of funcs) {
            const signature = this.signature(owner, func, "");
            const line = `${this.memberName(func.name)}${signature};`;

            // The same overload listed twice.
            if (seen.has(line)) continue;
            seen.add(line);

            text += docComment(func.doc, indent) + indent + line + "\n";
        }

        return text;
    }

    functions(owner: string, funcs: Func[], indent: string): string {
        const seen = new Set<string>();
        let text = "";

        for (const func of funcs) {
            const line = `function ${func.name}${this.signature(owner, func, "this: void")};`;

            if (seen.has(line)) continue;
            seen.add(line);

            text += docComment(func.doc, indent) + indent + line + "\n";
        }

        return text;
    }

    events(page: Page): string {
        let text = "";

        for (const event of page.events) {
            const returns = page.name === "GameEvents" && testEvent.test(event.name) && event.returns?.length === 0 ? "bool" : undefined;

            text += docComment(event.doc, "    ");
            text += `    readonly ${this.memberName(event.name)}: GameEvent<${this.signature(page.name, event, "this: void", returns).replace(/\): /, ") => ")}>;\n`;
        }

        let declaration = `declare const ${page.name}: {\n${text}}`;

        // Mods declare their own events.
        if (page.name === "LuaEvents") declaration += ` & {\n    readonly [name: string]: GameEvent<(this: void, ...args: any[]) => void>;\n}`;

        return declaration + ";\n";
    }

    enumeration(page: Page, enumeration: Enum): string {
        const valueType = page.isInteger ? page.name : "int";
        const keys = enumeration.keys.map(key => `    readonly ${this.memberName(key)}: ${valueType};\n`).join("");
        const doc = enumeration.dynamic ? `The \`${valueType}\` of each row, as found in the base game: prefer \`GameInfoTypes\`, that also has the rows of mods.` : `Every \`${valueType}\`.`;
        let declaration = docComment(doc) + `declare const ${enumeration.name}: {\n${keys}}`;

        if (enumeration.dynamic) declaration += ` & {\n    readonly [type: string]: ${valueType} | undefined;\n}`;

        return declaration + ";\n";
    }

    page(page: Page): string {
        const parts: string[] = [];
        let doc = page.doc;

        if (page.isLuaObject) doc = [doc, `Defined in a Lua file of the game, see \`include\`.`].filter(Boolean).join("\n\n");

        if (page.isInteger) {
            parts.push(docComment(doc) + `type ${page.name} = int;\n`);
        }

        const hasInterface = page.instanceMethods.length > 0 || page.fields.length > 0 || page.bases.size > 0;

        if (hasInterface) {
            const bases = page.bases.size > 0 ? ` extends ${Array.from(page.bases.keys()).join(", ")}` : "";
            let body = page.fields.map(field => docComment(field.doc, "    ") + `    ${this.memberName(field.name)}: ${this.type(field.type)};\n`).join("");

            body += this.methods(page.name, page.instanceMethods, "    ");
            parts.push(docComment(doc) + `interface ${page.name}${bases} {\n${body}}\n`);
        }

        if (page.staticMethods.length > 0) {
            const name = renamed[page.name] ?? page.name;
            let staticDoc = hasInterface ? "" : doc;

            if (name !== page.name) staticDoc = [staticDoc, `\`${page.name}\` in Lua.`, `@customName ${page.name}`].filter(Boolean).join("\n\n");

            parts.push(docComment(staticDoc) + `declare namespace ${name} {\n${this.functions(page.name, page.staticMethods, "    ")}}\n`);
        } else if (page.isLuaObject && hasInterface) {
            // A class-like table, its methods are called with a colon on it: `InstanceManager:new(...)`.
            parts.push(`declare const ${page.name}: ${page.name};\n`);
        }

        if (page.events.length > 0) parts.push(docComment(doc) + this.events(page));

        for (const enumeration of page.enums) parts.push(this.enumeration(page, enumeration));

        return parts.join("\n");
    }
}

// --- Main ---

const reference = await fetchPage(referencePage);
const typeNames = Array.from(new Set(Array.from(reference.matchAll(/\{\{Type5\|([^|}]+)/g), match => match[1].trim())));

// The objects defined in Lua files, that are not built in the game.
const luaObjectsSection = reference.match(/== Lua Objects ==([\s\S]*?)\n==[^=]/)?.[1] ?? "";
const luaObjects = new Set(Array.from(luaObjectsSection.matchAll(/\{\{Type5\|([^|}]+)/g), match => match[1].trim()));

const pages: Page[] = [];

for (const name of typeNames) {
    if (handWritten.includes(name)) continue;

    pages.push(parsePage(name, await fetchPage(typePage(name)), luaObjects));
}

const generator = new Generator();

for (const page of pages) {
    if (page.isInteger || page.instanceMethods.length > 0 || page.fields.length > 0 || page.bases.size > 0) generator.types.add(page.name);
    if (page.staticMethods.length > 0) generator.namespaces.add(page.name);
}

// The base types of the UI controls, their methods are listed on each control inheriting them.
const bases = new Map<string, Func[]>();

for (const page of pages) {
    for (const [base, funcs] of page.bases) {
        if (!bases.has(base) || bases.get(base)!.length < funcs.length) bases.set(base, funcs);
    }
}

for (const base of bases.keys()) generator.types.add(base);

let output = `// Generated by "civ5-scraper/api.ts" from the Civ5 modding wiki, do not edit:
// ${wikiUrl}?title=${referencePage}
// The wiki covers the base game and Gods & Kings.

`;

for (const [base, funcs] of bases) {
    output += `interface ${base} {\n${generator.methods(base, funcs, "    ")}}\n\n`;
}

for (const page of pages) {
    const text = generator.page(page);

    if (text !== "") output += text + "\n";
}

// Global functions, by the Lua file declaring them.
for (const { title, body } of sections(await fetchPage(globalsPage))) {
    const funcs = parseFunctions(body, "Global");

    if (funcs.length === 0) continue;

    const file = title.match(/^(\w+)\.lua$/)?.[1];

    for (const func of funcs) {
        if (file != null) func.doc = [func.doc, `Defined in "${file}.lua": \`include("${file}")\`.`].filter(Boolean).join("\n\n");

        output += docComment(func.doc) + `declare function ${func.name}${generator.signature("Global", func, "this: void")};\n`;
    }

    output += "\n";
}

// Types referenced by the wiki without a page.
for (const name of Array.from(generator.missing).sort()) {
    console.log(`WARNING: "${name}" is not documented, typed as \`any\``);
    output += `/** Not documented on the wiki. */\ntype ${name} = any;\n`;
}

await writeFile(apiFile, output.trimEnd() + "\n");

console.log(`Generated ${apiFile}`);
