import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
var store = configureStore({ reducer: reducer });
export default store;
