import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { auth } from '@clerk/nextjs/server';

const httpLink = new HttpLink({
  uri: process.env.HASURA_PROJECT_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

const authLink = setContext(async (_, { headers }) => {
  // Client-side
  const { getToken } = auth();
  const token = await getToken({ template: 'hasura' });
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  ssrMode: true,
});
