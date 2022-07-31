import { createApi } from '@reduxjs/toolkit/query/react'
import { tokenBaseQuery } from '..'
import { RootState } from '../../App.store'
import { CART_BASE_URL } from '../constant'
import * as I from './cart.interface'

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: tokenBaseQuery(CART_BASE_URL),

  endpoints: (build) => ({
    // ! 장바구니 넣기
    postAddCart: build.mutation<any, I.Req_AddCart>({
      query: (params) => ({
        url: `/carts/detail`,
        method: 'POST',
        body: params,
      }),
    }),

    // ! 장바구니 조회
    getCartList: build.query<I.Res_CartList, void>({
      query: () => ({
        url: `/carts`,
      }),
      keepUnusedDataFor: 0,
    }),

    // ! 장바구니 업데이트
    updateCartList: build.mutation<any, I.Req_UpdateCartList>({
      query: (params) => ({
        url: `/carts/detail/${params.cartDetailId}`,
        method: 'PUT',
        body: params.body,
      }),
    }),

    // ! 장바구니 삭제
    deleteCartList: build.mutation<any, { cartDetailId: number }>({
      query: (params) => ({
        url: `/carts/detail/${params.cartDetailId}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const selectCartList = (state: RootState) => state.cartApi.queries['getCartList(undefined)']?.data

export const { usePostAddCartMutation, useGetCartListQuery, useUpdateCartListMutation, useDeleteCartListMutation } =
  cartApi
