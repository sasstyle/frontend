import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = ''

export const defaultBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  prepareHeaders: (headers, { endpoint }) => {
    return headers
  },
  credentials: 'omit',
})
