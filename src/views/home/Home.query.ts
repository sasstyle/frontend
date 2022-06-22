import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '../../api'
import { Res_Product_List } from './Home.interface'
import { TEST_BASE_URL } from '../../api/constant'

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: defaultBaseQuery(TEST_BASE_URL),
  endpoints: (build) => ({
    requestProductList: build.query<Res_Product_List, void>({
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
  }),
})

export const { useRequestProductListQuery } = homeApi
