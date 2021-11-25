var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    data: { total_quantity: 0, subtotal: 0, total: 0, total_discount: 0, token: null, items: [] },
    loading: false,
    error: null
};
var cartResumeSlice = createSlice({
    name: 'cartResume',
    initialState: initialState,
    reducers: {}
});
export var _b = _a = cartResumeSlice.actions;
export default cartResumeSlice.reducer;
