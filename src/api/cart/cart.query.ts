import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { CART_BASE_URL } from '../constant'
import * as I from './cart.interface'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: defaultBaseQuery(CART_BASE_URL),
  endpoints: (build) => ({
    // ! 장바구니 넣기
    postAddCart: build.mutation<any, I.Req_AddCart>({
      query: (params) => ({
        url: `/carts`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),

    // ! 장바구니 조회
    getCartList: build.query<I.Res_CartList, void>({
      query: () => ({
        url: `/carts`,
      }),
    }),
  }),
})

export const { usePostAddCartMutation, useGetCartListQuery } = cartApi
