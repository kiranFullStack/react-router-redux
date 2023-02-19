import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useDispatch } from 'react-redux'

// Define a service using a base URL and expected endpoints
export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => `/articles`,
    }),

    getArticlesById: builder.query({
      query: (id) => `articles/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllArticlesQuery, useGetArticlesByIdQuery } = articlesApi
