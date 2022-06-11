import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import PostsGrid from './PostsGrid';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      body
      userId
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

  const data = dataPosts?.posts?.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
    authorName: dataUsers?.users?.find(u => u.id === post.userId)?.name,
    authorEmail: dataUsers?.users?.find(u => u.id === post.userId)?.email,
  }));

  return <PostsGrid posts={data} />;
};

//   return (
//     <div>
//       <Head>
//         <title>Posts | Neulabs fullstack assignment</title>
//       </Head>
//       <main>
//         <h1>Post list</h1>
//         {data?.map(d => (
//           <article key={d.id}>
//             <h1>{d.title}</h1>
//             <h2>{d.authorName}</h2>
//             <h2>{d.authorEmail}</h2>
//             <p>{d.body}</p>
//           </article>
//         ))}
//       </main>
//     </div>
//   );
// };

export default Posts;
