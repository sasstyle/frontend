import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const defaultBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers, { endpoint }) => {
      // if (endpoint === '/users/me') {
      //   headers.set('userId', `Bearer ${token}`)
      // }

      return headers
    },
    credentials: 'omit',
  })
