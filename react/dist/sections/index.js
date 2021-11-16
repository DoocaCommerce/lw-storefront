"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const section_loader_1 = require("../section-loader");
const Sections = (sections) => {
    const renderSections = () => {
        return Object.keys(sections).map(index => {
            console.log(index);
            return (0, jsx_runtime_1.jsx)(section_loader_1.default, { schema: index }, void 0);
        });
    };
    return renderSections();
};
exports.default = section_loader_1.default;
//# sourceMappingURL=index.js.map