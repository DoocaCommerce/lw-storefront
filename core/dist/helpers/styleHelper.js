"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebFont = require("webfontloader");
const stringHelper_1 = require("./stringHelper");
const fonts = {};
function parseRootVars(variables) {
    const varList = Object.entries(variables);
    const rootVars = varList.reduce((root, [key, value]) => `${root} --theme-${(0, stringHelper_1.formatKebabCase)(key)}: ${value};`, '');
    return `:root{ ${rootVars} }`;
}
function fontLoader(font) {
    if (!font)
        return '';
    const { family, category, font_weight } = font;
    const fontLoad = `${family}:${font_weight}`;
    const fontFamily = `${family}, ${category}`;
    if (fonts[fontLoad])
        return fontFamily;
    WebFont.load({
        google: {
            families: [fontLoad]
        }
    });
    fonts[fontLoad] = true;
    return fontFamily;
}
exports.default = { parseRootVars, fontLoader };
//# sourceMappingURL=styleHelper.js.map