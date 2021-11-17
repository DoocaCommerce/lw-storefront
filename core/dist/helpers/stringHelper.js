function normalizeText(text) {
    return text.replace(/\.?([A-Z]+)/g, function (m) { return " " + m.toLowerCase(); }).trim();
}
export function slugify(text) {
    var textNormal = normalizeText(text);
    return textNormal
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, '-');
}
//# sourceMappingURL=stringHelper.js.map