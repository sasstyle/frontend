import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { PRODUCT_BASE_URL } from '../constant'
import {
  Req_Post_Product,
  Req_ProductList,
  Req_ProductList_Search,
  Res_Post_Product,
  Res_ProductAutoComplete,
  Res_ProductList,
} from './product.interface'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: defaultBaseQuery(PRODUCT_BASE_URL),
  endpoints: (build) => ({
    // ! 카테고리 관계 없이 모든 상품 불러오기
    getAllProduct: build.query<Res_ProductList, Req_ProductList>({
      query: ({ page, size = 20 }) => ({
        url: `products?page=${page}&size=${size}`,
      }),
    }),

    // ! 카테고리에 따라 상품 불러오기
    getProduct: build.query<Res_ProductList, Req_ProductList>({
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
    productSearch: build.query<Res_ProductList, Req_ProductList_Search>({
      query: ({ sort = 'idAsc', name }) => ({
        url: `/products/search?sort=${sort}&name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
    productAutoComplete: build.query<Res_ProductAutoComplete, Req_ProductList_Search>({
      query: ({ sort = 'idAsc', name }) => ({
        url: `/products/search?sort=${sort}&name=${name}`,
      }),
      transformResponse: (res: any) => res.data,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),

    postProduct: build.mutation<Res_Post_Product, Req_Post_Product>({
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
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
  }),
})

export const {
  useGetAllProductQuery,
  useProductSearchQuery,
  useProductAutoCompleteQuery,
  useGetCategoryQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
} = productApi
