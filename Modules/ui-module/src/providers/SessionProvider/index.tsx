import { useCallback, useEffect, useMemo, useState } from 'react';
import { NavigateFunction } from 'react-router';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { showNotification } from '@mantine/notifications';
import { SessionContext } from './contexts';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionContextType } from './types';

export function SessionProvider({ config, children }: SessionProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const invalidateAuthentication = useCallback(async () => {
    try {
      const isAuthenticated: boolean = await isValidSession(config);

      setIsAuthenticated(isAuthenticated);
    } catch (error: any) {
      showNotification({
        message: `We could not validate your session. ${error.message || 'There was a problem.'}`,
        color: 'red'
      });
    }
  }, [config, setIsAuthenticated]);

  useEffect(() => {
    invalidateAuthentication().then().catch();

    return () => {};
  }, [invalidateAuthentication]);

  const handleLogout = useCallback(async (navigate: NavigateFunction) => {
    const response: Response = await fetch(`${config.server.url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign you out successfully. Clear your browser\'s cookies',
        color: 'red'
      });
    } else {
      invalidateAuthentication().finally(() => navigate('/'));
    }
  }, [invalidateAuthentication]);

  const value: SessionContextType = {
    isAuthenticated,
    invalidateAuthentication,
    handleLogout
  };

  const client = useMemo(() => new ApolloClient({
    uri: `${config.server.url}/graphql`,
    cache: new InMemoryCache()
  }), []);

  return (
    <SessionContext.Provider value={value}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </SessionContext.Provider>
  );
}
