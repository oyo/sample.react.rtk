import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PokemonListItem {
  name: string
  url: string
}

export type PokemonListResult = {
  count: number
  next: string
  previous: string
  results: Array<PokemonListItem>
}

export const api = createApi({
  reducerPath: 'api/pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query<Array<PokemonListItem>, void>({
      query: () => 'pokemon',
      transformResponse: (response: PokemonListResult) => response.results
    }),
  }),
})

export const { useFetchPokemonsQuery } = api
