import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '../../api/query'
import { Req_Login, Req_Signup, Res_Login, Res_Signup } from './signup.interface'

const BASE_URL = 'http://175.205.6.23:8000/user-service'

export const signupApi = createApi({
  baseQuery: defaultBaseQuery(BASE_URL),
  endpoints: (build) => ({
    requestSignup: build.mutation<Res_Signup, Req_Signup>({
      query: (params) => ({
        url: `/users`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
    requestLogin: build.mutation<Res_Login, Req_Login>({
      query: (params) => ({
        url: `/users/login`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
  }),
})

export const { useRequestSignupMutation, useRequestLoginMutation } = signupApi
