import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import PostsGrid from '../components/PostsGrid';
import { Post, User, UserAndPost } from '../shared/types';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      category
      body
      userId
      date
    }
  }
`;

const GET_USER = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

const Posts: NextPage = () => {
  const { data: dataPosts } = useQuery(GET_POSTS);
  const { data: dataUsers } = useQuery(GET_USER);

  const data: UserAndPost[] = dataPosts?.posts?.map((post: Post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    category: post.category,
    date: new Date(post.date).toLocaleDateString(),
    authorName: dataUsers?.users?.find((u: User) => u.id === post.userId)?.name,
    authorEmail: dataUsers?.users?.find((u: User) => u.id === post.userId)
      ?.email,
    userId: post.userId,
  }));

  return <PostsGrid posts={data} />;
};

export default Posts;
