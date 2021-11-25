import { combineReducers } from '@reduxjs/toolkit';
import cartResume from './modules/cart-resume';
import settings from './modules/settings';
var reducer = combineReducers({ settings: settings, cartResume: cartResume });
export default reducer;
