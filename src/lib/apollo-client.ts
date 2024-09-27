import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '@clerk/nextjs';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
  fetchOptions: { cache: 'no-store' },
});

const authLink = setContext(async (_, { headers }) => {
  let token;

  if (typeof window === 'undefined') {
    const requestHeaders = headers();
    token = requestHeaders.get('authorization')?.split(' ')[1];
  } else {
    const { getToken } = useAuth();
    token = await getToken({ template: 'hasura' });
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
