import PostItem from './PostItem';
import { UserAndPost } from '../../shared/types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PostsGrid: React.FC<{ posts: UserAndPost[] }> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts yet</p>;
  }
  return (
    <div>
      <Box>
        <Grid container>
          {posts.map(post => (
            <Grid item xs={4} key={post.id}>
              <PostItem key={post.id} item={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PostsGrid;
