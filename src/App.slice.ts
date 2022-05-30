import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CLEANUP_STATE, INITIAL_STATE } from './App.constant'
import { T_RootState } from './core/store'

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setSomething: (state, { payload }: PayloadAction<any>) => {},
    cleanupState: () => CLEANUP_STATE,
  },
})

export const { cleanupState, setSomething } = appSlice.actions

// export const selectSome = ({ appSlice }: T_RootState) => appSlice.something

export default appSlice.reducer
