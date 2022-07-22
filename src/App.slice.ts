import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CLEANUP_STATE, INITIAL_STATE } from './App.constant'
import { RootState } from './App.store'

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setIsDimmed: (state, { payload }: PayloadAction<boolean>) => {
      state.isDimmed = payload
    },
    cleanupState: (state) => {
      state = CLEANUP_STATE
    },
  },
})

export const { cleanupState, setIsDimmed } = appSlice.actions

export const selectIsDimmed = ({ appSlice }: RootState) => appSlice.isDimmed

export default appSlice.reducer
