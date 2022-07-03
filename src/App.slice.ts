import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CLEANUP_STATE, INITIAL_STATE } from './App.constant'
import { T_RootState } from './core/store'

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setIsDimmed: (state, { payload }: PayloadAction<boolean>) => {
      state.isDimmed = payload
    },
    cleanupState: () => CLEANUP_STATE,
  },
})

export const { cleanupState, setIsDimmed } = appSlice.actions

export const selectIsDimmed = ({ appSlice }: T_RootState) => appSlice.isDimmed

export default appSlice.reducer
