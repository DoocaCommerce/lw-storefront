import { slugify } from '@tray-storefront/core/dist/helpers/stringHelper.js';
export default function useVariable(ref) {
    var element = (ref === null || ref === void 0 ? void 0 : ref.current) || document.documentElement;
    function setVariables(variables) {
        Object.entries(variables).map(function (_a) {
            var name = _a[0], value = _a[1];
            element.style.setProperty("--" + slugify(name), value);
        });
    }
    return { setVariables: setVariables };
}
//# sourceMappingURL=use-variables.js.map