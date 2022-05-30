import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// slice, query
import AppReducer from '../../App.slice'
import { appQuery } from '../../App.query'

const rootReducer = combineReducers({
  appSlice: AppReducer,
  [appQuery.reducerPath]: appQuery.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appQuery.middleware),
})

export type T_AppDispatch = typeof store.dispatch
export type T_RootState = ReturnType<typeof rootReducer>

setupListeners(store.dispatch)
