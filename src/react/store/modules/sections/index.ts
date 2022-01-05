import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { services } from '../../../../core'
import { SectionsState } from './type'

const initialState: SectionsState = {
  data: {},
  loading: false,
  error: null
}

export const getSections = createAsyncThunk('settings/getSections', async (dispatch, getState) => {
  return await services.sections.get()
})

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    updateSections(state, action) {
      state.data = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getSections.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getSections.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(getSections.rejected, (state, action) => {
      state.loading = false
      state.data = {}
      state.error = action.error.message
    })
  }
})

export const { updateSections } = sectionsSlice.actions
export default sectionsSlice.reducer
