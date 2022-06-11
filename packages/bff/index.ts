import { ApolloServer, gql } from 'apollo-server';
import posts from './posts';
import { UsersAPI } from './usersApi';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    category: String
    body: String
    userId: ID
    date: String
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    posts: [Post]
    users: [User]
  }
`;

const dataSources = () => ({
  usersApi: new UsersAPI(),
});

const resolvers = {
  Query: {
    posts: () => posts,
    users: (_: any, __: any, { dataSources }: any) =>
      dataSources.usersApi.getUsers(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
