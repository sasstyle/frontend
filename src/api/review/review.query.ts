import { tokenBaseQuery } from './../index'
import { createApi } from '@reduxjs/toolkit/query/react'
import { REVIEW_BASE_URL } from '../constant'
import * as I from './review.interface'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: tokenBaseQuery(REVIEW_BASE_URL),
  endpoints: (build) => ({
    // ! 리뷰 추가하기
    postReview: build.mutation<any, I.Req_PostReview>({
      query: (params) => ({
        url: `/reviews`,
        method: 'POST',
        body: params,
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),

    // ! 리뷰 조회하기
    getReview: build.query<I.Res_Review, I.Req_Review>({
      query: ({ productId }) => ({
        url: `/reviews?productId=${productId}`,
      }),
    }),

    // ! 리뷰 삭제하기
    deleteReview: build.mutation<any, I.Req_DeleteReview>({
      query: ({ reviewId }) => ({
        url: `/reviews?reviewId=${reviewId}`,
        method: 'DELETE',
      }),
      //   transformResponse: () => {},
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }) {},
    }),
  }),
})

export const { useGetReviewQuery, usePostReviewMutation } = reviewApi
