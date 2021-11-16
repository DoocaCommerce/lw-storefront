"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SectionLoader = (props) => {
    const DynamicComponent = (0, react_1.lazy)(() => Promise.resolve().then(() => require(/* @vite-ignore */ `/src/components/sections/${props.schema}/`)));
    console.log(props);
    return ((0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }, void 0) }, { children: (0, jsx_runtime_1.jsx)(DynamicComponent, { settings: props.settings, blocks: props.blocks }, void 0) }), void 0));
};
exports.default = SectionLoader;
//# sourceMappingURL=index.js.map