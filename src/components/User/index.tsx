import { Card } from '@catena-x/portal-shared-components'
import { type User } from 'features/api/users'
import { success } from 'services/NotifyService'

const UserIcon = 'data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="3" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="27" stroke="none" fill="lightgray"/><circle cx="30" cy="23" r="12"/><path d="M13,49 a20,20 1 0,1 34,0" stroke-linecap="round"/></svg>'

const UserItem = ({ item }: { item: User }) => {
  return (
   <Card
      key={item.id}
      title={item.name}
      subtitle={item.username}
      image={{
        src: UserIcon,
      }}
      imageSize='small'
      buttonText="Details"
      onClick={() => success(`User "${item.name}" clicked`)}
    />
  )
}

export default UserItem