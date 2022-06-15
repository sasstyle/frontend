import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const defaultBaseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers, { endpoint }) => {
      return headers
    },
    credentials: 'omit',
  })
