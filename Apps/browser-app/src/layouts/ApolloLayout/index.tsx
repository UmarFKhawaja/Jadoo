import { useMemo } from 'react';
import { Outlet } from 'react-router';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { config } from '../../config';

export function ApolloLayout() {
  const client: ApolloClient<any> = useMemo(() => new ApolloClient({
    uri: config.api.graphql,
    cache: new InMemoryCache()
  }), []);

  return (
    <ApolloProvider client={client}>
      <Outlet/>
    </ApolloProvider>
  );
}
