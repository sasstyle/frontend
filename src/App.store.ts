import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

// slice
import appReducer from './App.slice'

// api
import { signupApi } from './api/auth/auth.query'
import { productApi } from './api/product/product.query'
import { cartApi } from './api/cart/cart.query'
import { orderApi } from './api/order/order.query'

const rootReducer = combineReducers({
  [signupApi.reducerPath]: signupApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  appSlice: appReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        signupApi.middleware,
        productApi.middleware,
        cartApi.middleware,
        orderApi.middleware
      ),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
