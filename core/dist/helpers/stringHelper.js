"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatKebabCase = void 0;
function formatKebabCase(string) {
    return string.replace(/\.?([A-Z]+)/g, m => `-${m.toLowerCase()}`);
}
exports.formatKebabCase = formatKebabCase;
exports.default = { formatKebabCase };
//# sourceMappingURL=stringHelper.js.map