import { createApi } from '@reduxjs/toolkit/query/react'
import { defaultBaseQuery } from './api'

export const appQuery = createApi({
  reducerPath: 'appQuery',
  baseQuery: defaultBaseQuery(),
  tagTypes: ['app'],

  endpoints: (builder) => ({}),
})

export const {} = appQuery
