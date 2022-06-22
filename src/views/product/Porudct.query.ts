import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '../../api'
import { TEST_BASE_URL } from '../../api/constant'
import { Product } from '../home/Home.interface'
import { Req_ProductDetail } from './Product.interface'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: defaultBaseQuery(TEST_BASE_URL),
  endpoints: (build) => ({
    requestProductDetail: build.query<Product, Req_ProductDetail>({
      query: (id) => ({
        url: `/product/${id}`,
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

export const { useRequestProductDetailQuery } = productApi
