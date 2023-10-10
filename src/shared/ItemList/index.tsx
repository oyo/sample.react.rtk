import './style.scss'

const defaultRender = function<Item>(item: Item) {
  return (
    <span>{JSON.stringify(item)}</span>
  )
}

type ItemListProps<Item> = {
  fetchItems: () => any
  renderItem?: (item: Item) => JSX.Element
}

const ItemList = function <Item>({
  fetchItems,
  renderItem = defaultRender
}: ItemListProps<Item>) {

  const { data } = fetchItems()

  return (
    <ul>
      {
        data?.map((item: Item) => <li>{renderItem(item)}</li>)
      }
    </ul>
  )
}

export default ItemList