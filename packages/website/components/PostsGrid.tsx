import PostItem from './PostItem';
import { UserAndPost } from '../shared/types';

const PostsGrid: React.FC<{ posts: UserAndPost[] }> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts yet</p>;
  }
  return (
    <div>
      {posts.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostsGrid;
