import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

// api
import { signupApi } from './views/signup/Signup.query'
import { homeApi } from './views/home/Home.query'

const rootReducer = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  [signupApi.reducerPath]: signupApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(signupApi.middleware, homeApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']