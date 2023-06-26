// gameplay/xml/gameinfo/civ5iconfontmapping

declare type Vanilla_IconFontTextures = {
	/**
	 * Primary Key
	 */
	IconFontTexture: TEXT,
	/**
	 */
	IconFontTextureFile: TEXT,
}

declare type Vanilla_IconFontMapping = {
	/**
	 * Primary Key
	 */
	IconName: TEXT,
	/**
	 */
	IconMapping: INTEGER,
	/**
	 * @default ICON_FONT_TEXTURE_DEFAULT
	 * Reference: IconFontTextures(IconFontTexture)
	 */
	IconFontTexture: TEXT,
}

