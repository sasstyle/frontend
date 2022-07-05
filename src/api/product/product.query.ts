import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { PRODUCT_BASE_URL } from '../constant'
import {
  Req_Post_Product,
  Req_ProductList_Search,
  Res_Post_Product,
  Res_ProductAutoComplete,
  Res_ProductList,
} from './product.interface'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: defaultBaseQuery(PRODUCT_BASE_URL),
  endpoints: (build) => ({
    requestGetAllProduct: build.query<Res_ProductList, void>({
      query: () => ({
        url: `/`,
      }),
      transformResponse: (res: any) => res.data,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
    requestProductSearch: build.query<Res_ProductList, Req_ProductList_Search>({
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
    requestProductAutoComplete: build.query<Res_ProductAutoComplete, Req_ProductList_Search>({
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
    requestPostProduct: build.mutation<Res_Post_Product, Req_Post_Product>({
      query: (params) => ({
        url: `/products`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),
  }),
})

export const { useRequestGetAllProductQuery, useRequestProductSearchQuery, useRequestProductAutoCompleteQuery } =
  productApi
