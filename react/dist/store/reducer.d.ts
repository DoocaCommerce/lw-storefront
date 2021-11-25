declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    settings: import("./modules/settings/type").SettingsState;
    cartResume: import("./modules/cart-resume/type").CartResumeState;
}>, import("redux").AnyAction>;
export default reducer;
