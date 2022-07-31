import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import type { PreloadedState } from '@reduxjs/toolkit'

// slice
import appReducer from './App.slice'

// api
import { signupApi } from './api/auth/auth.query'
import { productApi } from './api/product/product.query'
import { cartApi } from './api/cart/cart.query'
import { orderApi } from './api/order/order.query'
import { reviewApi } from './api/review/review.query'

const rootReducer = combineReducers({
  [signupApi.reducerPath]: signupApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  appSlice: appReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(signupApi.middleware)
        .concat(productApi.middleware)
        .concat(cartApi.middleware)
        .concat(orderApi.middleware)
        .concat(reviewApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
