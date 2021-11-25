import { CartResumeState } from './modules/cart-resume/type';
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    settings: import("./modules/settings/type").SettingsState;
    cartResume: CartResumeState;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    settings: import("./modules/settings/type").SettingsState;
    cartResume: CartResumeState;
}>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    settings: import("./modules/settings/type").SettingsState;
    cartResume: CartResumeState;
}>, import("redux").AnyAction, undefined>]>;
export default store;
