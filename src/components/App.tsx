import { type PokemonListItem, useFetchPokemonsQuery } from 'features/api/pokemon'
import { type Post, useFetchPostsQuery } from 'features/api/posts'
import { type User, useFetchUsersQuery } from 'features/api/users'
import ItemList from 'shared/ItemList'
import UserItem from './User'
import PostItem from './Post'
import PokemonItem from './Pokemon'
import Notify from './Notify'

const renderPokemon = (item: PokemonListItem) => <PokemonItem item={item} />
const renderPost = (item: Post) => <PostItem item={item} />
const renderUser = (item: User) => <UserItem item={item} />

const App = () => {
  return (
    <main style={{ padding: '40px 100px' }}>

      <h3>Pokemon</h3>
      <ItemList<PokemonListItem>
        fetchItems={useFetchPokemonsQuery}
        renderItem={renderPokemon}
      />

      <h3>Users</h3>
      <ItemList<User>
        fetchItems={useFetchUsersQuery}
        renderItem={renderUser}
      />

      <h3>Posts</h3>
      <ItemList<Post>
        fetchItems={useFetchPostsQuery}
        renderItem={renderPost}
      />

      <Notify />

    </main>
  )
}

export default App