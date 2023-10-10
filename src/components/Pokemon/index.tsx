import { Card } from '@catena-x/portal-shared-components'
import { type PokemonListItem } from 'features/api/pokemon'
import { success } from 'services/NotifyService'

const IMG_BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const PokemonItem = ({ item }: { item: PokemonListItem }) => {
  const id = item.url.split(/\//).slice(-2).shift() ?? '1'
  return (
   <Card
      key={item.name}
      title={item.name}
      image={{
        src: `${IMG_BASE}${id}.png`,
      }}
      imageSize='medium'
      buttonText='Details'
      variant='compact'
      expandOnHover={true}
      onButtonClick={() => success(`Pokemon "${item.name}" clicked`)}
    />
  )
}

export default PokemonItem