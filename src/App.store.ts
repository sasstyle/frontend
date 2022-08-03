import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import appReducer from './App.slice'

// api
import { apiSlice } from './App.apiSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  appSlice: appReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
