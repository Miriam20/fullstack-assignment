import { Post } from './types';

const PostItem: React.FC<{ item: Post }> = ({ item }) => {
  return (
    <div>
      <div>{item.title}</div>
      <div>{item.authorName}</div>
      <div>{item.authorEmail}</div>
      <div>{item.body}</div>
    </div>
  );
};

export default PostItem;
