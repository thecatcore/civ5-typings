declare type gameplay_xml_gameinfo_civ5iconfontmapping_IconFontTextures = {
	/**
	 * Primary Key
	 */
	IconFontTexture: TEXT,
	/**
	 */
	IconFontTextureFile: TEXT,
}

declare type gameplay_xml_gameinfo_civ5iconfontmapping_IconFontMapping = {
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

