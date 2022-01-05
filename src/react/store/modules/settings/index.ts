import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { services } from '../../../../core'
import { SettingsState } from './type'

const initialState: SettingsState = {
  data: {},
  loading: false,
  error: null
}

export const getSettings = createAsyncThunk('settings/getSettings', async (dispatch, getState) => {
  return await services.settings.get()
})

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings(state, action) {
      state.data = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getSettings.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getSettings.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    })
    builder.addCase(getSettings.rejected, (state, action) => {
      state.loading = false
      state.data = {}
      state.error = action.error.message
    })
  }
})

export const { updateSettings } = settingsSlice.actions
export default settingsSlice.reducer
