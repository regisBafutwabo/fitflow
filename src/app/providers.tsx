'use client';
import { useMemo } from 'react';

import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '@clerk/nextjs';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const apolloClient = useMemo(() => {
    const authMiddleware = setContext(async (req, { headers }) => {
      const token = await getToken({ template: 'hasura' });
      console.log('Token', token);
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });
    console.log('REQUEST', authMiddleware);
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT,
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
      devtools: {
        enabled: process.env.NODE_ENV === 'development',
        name: 'fitflow',
      },
    });
  }, [getToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Providers;
