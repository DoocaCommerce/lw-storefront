function updateSettingsData(store) {
    return function (_a) {
        var data = _a.data;
        store.dispatch('theme/getSettingsData', data);
    };
}
export default updateSettingsData;
