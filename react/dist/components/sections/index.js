import * as React from 'react';
import { SectionLoader } from '../section-loader';
export function Sections(_a) {
    var sections = _a.sections, _b = _a.path, path = _b === void 0 ? 'sections' : _b;
    var renderSections = function () {
        return Object.keys(sections).map(function (index) {
            var _a = sections[index], schema = _a.schema, blocks = _a.blocks, settings = _a.settings;
            return React.createElement(SectionLoader, { path: path, schema: schema, settings: settings, blocks: blocks, key: index });
        });
    };
    return React.createElement(React.Fragment, null, renderSections());
}
//# sourceMappingURL=index.js.map