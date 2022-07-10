import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from '..'
import { Req_IsUser, Req_Login, Req_Signup, Res_IsUser, Res_Login, Res_Signup } from './auth.interface'
import { AUTH_BASE_URL } from '../constant'
import { setToken } from '../../core/util/user'

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
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),

    requestLogin: build.mutation<Res_Login, Req_Login>({
      query: (params) => ({
        url: `/users/login`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {
        const result = await queryFulfilled
        setToken('access_token', result.data.accessToken)
        setToken('refresh_token', result.data.refreshToken)
      },
    }),

    checkIsUser: build.query<Res_IsUser, void>({
      query: () => ({
        url: `/users/me`,
      }),
      // transformResponse: (res: any) => res.data,
    }),

    updateUserInfo: build.mutation<Res_IsUser, Req_IsUser>({
      query: (params) => ({
        url: `/users`,
        method: 'PUT',
        body: params,
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),
  }),
})

export const { useRequestSignupMutation, useRequestLoginMutation, useCheckIsUserQuery, useUpdateUserInfoMutation } =
  signupApi
