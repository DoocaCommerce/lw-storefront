import { slugify } from '@tray-storefront/core/dist/helpers/stringHelper.js';
import { useCallback, useRef } from 'react';
export function useVariable() {
    var ref = useRef(null);
    var setVariables = function (variables) {
        var element = (ref === null || ref === void 0 ? void 0 : ref.current) || document.documentElement;
        Object.entries(variables).map(function (_a) {
            var name = _a[0], value = _a[1];
            element.style.setProperty("--".concat(slugify(name)), value);
        });
    };
    var setRef = useCallback(function (element) {
        ref.current = element;
    }, []);
    return { setVariables: setVariables, setRef: setRef };
}
//# sourceMappingURL=use-variables.js.map