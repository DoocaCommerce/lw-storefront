import * as React from 'react';
import { Suspense } from 'react';
function importComponent(schema, path) {
    if (path === void 0) { path = 'sections'; }
    return React.lazy(function () {
        return import(
        /* webpackChunkName: "components" */
        /* webpackMode: "lazy-once" */
        /* webpackExports: ["default", "named"] */ "@components/".concat(path, "/").concat(schema))["catch"](console.log);
    });
}
export function SectionLoader(props) {
    var DynamicComponent = importComponent(props.schema, props.path);
    return (React.createElement(Suspense, { fallback: React.createElement("div", null, "Loading...") },
        React.createElement(DynamicComponent, { settings: props.settings, blocks: props.blocks })));
}
