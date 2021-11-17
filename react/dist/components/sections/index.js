import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { SectionLoader } from '../section-loader';
export function Sections(_a) {
    var sections = _a.sections;
    var renderSections = function () {
        return Object.keys(sections).map(function (index) {
            var _a = sections[index], schema = _a.schema, blocks = _a.blocks, settings = _a.settings;
            return _jsx(SectionLoader, { schema: schema, settings: settings, blocks: blocks }, index);
        });
    };
    return _jsx(_Fragment, { children: renderSections() }, void 0);
}
//# sourceMappingURL=index.js.map