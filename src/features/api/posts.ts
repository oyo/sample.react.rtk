import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const api = createApi({
  reducerPath: 'api/posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<Array<Post>, void>({
      query: () => 'posts',
    }),
  }),
})

export const { useFetchPostsQuery } = api
