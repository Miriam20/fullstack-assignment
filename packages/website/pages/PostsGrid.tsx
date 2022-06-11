import PostItem from './PostItem';
import { Post } from './types';

const PostsGrid: React.FC<{ posts: Post[] }> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts yet</p>;
  }
  return (
    <div className="feedback-list">
      {posts.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostsGrid;
