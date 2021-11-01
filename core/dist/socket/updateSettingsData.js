"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateSettingsData(store) {
    return ({ data }) => {
        store.dispatch('theme/getSettingsData', data);
    };
}
exports.default = updateSettingsData;
