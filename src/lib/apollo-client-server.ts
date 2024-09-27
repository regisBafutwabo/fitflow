import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { auth } from '@clerk/nextjs/server';

export const httpLink = createHttpLink({
  uri: process.env.HASURA_PROJECT_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

const authLink = setContext(async (_, { headers }) => {
  const { getToken } = auth();
  const token = await getToken({ template: 'hasura' });
  console.log('Token', token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
});
const client = getClient();

export default client;
