import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { fittingBaseQuery } from '..'
import * as I from './fitting.interface'

export const fittingApi = createApi({
  reducerPath: 'fittingApi',
  baseQuery: fittingBaseQuery(),
  tagTypes: ['fitting'],
  endpoints: (build) => ({
    // getOrderCart: build.query<any, any>({
    //   query: () => ({
    //     url: `:9000/fitting-service/orders`,
    //   }),
    //   providesTags: ['fitting'],
    // }),

    postFitting: build.mutation<I.Res_PostFitting, I.Req_PostFitting>({
      query: (params) => ({
        url: `:9000/fitting-service/fittings`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['fitting'],
    }),
  }),
})

export const { usePostFittingMutation } = fittingApi
