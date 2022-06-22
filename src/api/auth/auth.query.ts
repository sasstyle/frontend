import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { Req_Login, Req_Signup, Res_IsUser, Res_Login, Res_Signup } from './auth.interface'
import { AUTH_BASE_URL } from '../constant'

export const signupApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: defaultBaseQuery(AUTH_BASE_URL),
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

    requestIsUser: build.query<Res_IsUser, void>({
      query: () => ({
        url: `/users/me`,
      }),
      // transformResponse: (res: any) => res.data,
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
      async onCacheEntryAdded(
        arg,
        { dispatch, getState, extra, requestId, cacheEntryRemoved, cacheDataLoaded, getCacheEntry }
      ) {},
    }),
  }),
})

export const { useRequestSignupMutation, useRequestLoginMutation, useRequestIsUserQuery } = signupApi
