import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../core/util/user'

export const defaultBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers, { endpoint }) => {
      if (
        endpoint === 'checkIsUser' ||
        endpoint === 'updateUserInfo' ||
        endpoint === 'postAddCart' ||
        endpoint === 'getCartList'
      ) {
        headers.set('Authorization', `Bearer ${getToken('access_token')}`)
      }

      return headers
    },
    credentials: 'omit',
  })

export const tokenBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${getToken('access_token')}`)

      return headers
    },
    credentials: 'omit',
  })
