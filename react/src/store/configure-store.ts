import { configureStore } from '@reduxjs/toolkit'
import { CartResumeState } from './modules/cart-resume/type'
import reducer from './reducer'

const store = configureStore({ reducer })

export default store
