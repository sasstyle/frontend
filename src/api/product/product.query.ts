import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { T_RootState } from '../../core/store'
import { Product } from '../../core/types/product'
import { PRODUCT_BASE_URL } from '../constant'
import * as I from './product.interface'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: defaultBaseQuery(PRODUCT_BASE_URL),
  endpoints: (build) => ({
    // ! 카테고리 관계 없이 모든 상품 불러오기
    getAllProduct: build.query<I.Res_ProductList, I.Req_ProductList>({
      query: ({ page, size = 20 }) => ({
        url: `products?page=${page}&size=${size}`,
      }),
    }),

    // ! 카테고리에 따라 상품 불러오기
    getProduct: build.query<I.Res_ProductList, I.Req_ProductList>({
      query: ({ page = 0, size = 20, categoryId }) => ({
        url: `/categories/${categoryId}?page=${page}&size=${size}`,
      }),
      // transformResponse: (res: any) => res.data,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),

    // ! 상품 검색해서 불러오기
    productSearch: build.query<I.Res_ProductList, I.Req_ProductList_Search>({
      query: ({ sort = 'idAsc', name }) => ({
        url: `/products/search?sort=${sort}&name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    // ! 검색 시 글자 자동완성
    productAutoComplete: build.query<I.Res_ProductAutoComplete, I.Req_ProductList_Search>({
      query: ({ name }) => ({
        url: `/products/search/autocomplete?name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    // ! product detail 가져오기
    getProductDetail: build.query<I.Res_Product, I.Req_Product>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),

    postProduct: build.mutation<I.Res_Post_Product, I.Req_Post_Product>({
      query: (params) => ({
        url: `/products`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),
    getCategory: build.query<any, void>({
      query: () => ({
        url: '/categories',
      }),
      transformResponse: (res: any) => res.data,
    }),
  }),
})

export const selectProduct = (state: T_RootState) => state.productApi.queries

export const {
  useGetAllProductQuery,
  useLazyProductSearchQuery,
  useLazyProductAutoCompleteQuery,
  useGetCategoryQuery,
  useGetProductQuery,
  useGetProductDetailQuery,
} = productApi
