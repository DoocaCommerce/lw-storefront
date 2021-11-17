var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
export function SectionLoader(props) {
    var DynamicComponent = lazy(function () { return import("/src/components/sections/" + props.schema + "/"); });
    return (_jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }, void 0) }, { children: _jsx(DynamicComponent, { settings: props.settings, blocks: props.blocks }, void 0) }), void 0));
}
//# sourceMappingURL=index.js.map