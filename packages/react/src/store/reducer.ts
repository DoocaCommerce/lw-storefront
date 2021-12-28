import { combineReducers } from '@reduxjs/toolkit'
import cartResume from './modules/cart-resume'
import settings from './modules/settings'
import sections from './modules/sections'

const reducer = combineReducers({ settings, sections, cartResume })

export default reducer
