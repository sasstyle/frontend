import { tokenBaseQuery } from './../index'
import { createApi } from '@reduxjs/toolkit/query/react'
import { ORDER_BASE_URL } from '../constant'
import * as I from './order.interface'

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: tokenBaseQuery(ORDER_BASE_URL),
  endpoints: (build) => ({
    // ! 상품 주문하기
    postOrder: build.mutation<any, I.Req_PostOrder>({
      query: (params) => ({
        url: `/orders`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),

    // ! 주문한 상품 조회하기
    getOrderCart: build.query<I.Res_Order, void>({
      query: () => ({
        url: `/orders`,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
})

export const { usePostOrderMutation, useGetOrderCartQuery } = orderApi
