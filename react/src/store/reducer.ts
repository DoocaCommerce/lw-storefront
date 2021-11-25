import { combineReducers } from '@reduxjs/toolkit'
import cartResume from './modules/cart-resume'
import settings from './modules/settings'

const reducer = combineReducers({ settings, cartResume })

export default reducer
