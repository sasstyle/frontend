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
        endpoint == 'getProduct' ||
        endpoint === 'checkIsUser' ||
        endpoint === 'updateUserInfo' ||
        endpoint === 'postAddCart' ||
        endpoint === 'getCartList' ||
        endpoint === 'postLike' ||
        endpoint === 'deleteLike' ||
        endpoint === 'getLikeList' ||
        endpoint === 'postOrder' ||
        endpoint === 'deleteReview'
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
