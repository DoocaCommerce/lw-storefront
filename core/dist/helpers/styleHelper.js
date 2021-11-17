import * as WebFont from 'webfontloader';
import { slugify } from './stringHelper';
var fonts = {};
function parseRootVars(variables) {
    var varList = Object.entries(variables);
    var rootVars = varList.reduce(function (root, _a) {
        var key = _a[0], value = _a[1];
        return root + " --theme-" + slugify(key) + ": " + value + ";";
    }, '');
    return ":root{ " + rootVars + " }";
}
export function fontLoader(font) {
    if (!font)
        return '';
    var family = font.family, category = font.category, font_weight = font.font_weight;
    var fontLoad = family + ":" + font_weight;
    var fontFamily = family + ", " + category;
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
export default { parseRootVars: parseRootVars, fontLoader: fontLoader };
//# sourceMappingURL=styleHelper.js.map