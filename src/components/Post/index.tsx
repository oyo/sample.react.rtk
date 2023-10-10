import { type Post } from 'features/api/posts'
import './style.scss'
import { success } from 'services/NotifyService'

const PostItem = ({ item }: { item: Post }) => {
  return (
    <div
      className="post"
      key={item.id}
      onClick={() => success(`Post "${item.title}" clicked`)}
    >
      {item.title}
    </div>
  )
}

export default PostItem