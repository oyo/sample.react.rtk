import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { slice as notify } from './control/notify'
import { api as pokemon } from './api/pokemon'
import { api as posts } from './api/posts'
import { api as users } from './api/users'

export const reducers = {
  notify: notify.reducer,
  [pokemon.reducerPath]: pokemon.reducer,
  [posts.reducerPath]: posts.reducer,
  [users.reducerPath]: users.reducer,
}

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false })
      .concat(pokemon.middleware)
      .concat(posts.middleware)
      .concat(users.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch }
