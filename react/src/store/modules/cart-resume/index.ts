import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartResumeState } from './type'

const initialState: CartResumeState = {
  data: { total_quantity: 0, subtotal: 0, total: 0, total_discount: 0, token: null, items: [] },
  loading: false,
  error: null
}

const cartResumeSlice = createSlice({
  name: 'cartResume',
  initialState,
  reducers: {}
})

export const {} = cartResumeSlice.actions
export default cartResumeSlice.reducer
