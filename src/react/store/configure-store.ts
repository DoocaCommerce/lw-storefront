import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store: any = configureStore({ reducer: reducer })

export default store
