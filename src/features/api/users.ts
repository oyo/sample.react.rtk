import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
}

export const api = createApi({
  reducerPath: 'api/users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<Array<User>, void>({
      query: () => 'users',
    }),
  }),
})

export const { useFetchUsersQuery } = api
