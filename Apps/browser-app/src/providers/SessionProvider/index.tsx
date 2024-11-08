import { showNotification } from '@mantine/notifications';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import { SESSION_COOKIE_NAME } from '../../constants';
import { INITIAL_STATE } from './constants';
import { SessionContext } from './contexts';
import { fetchProfile, isTokenValid, reduce } from './methods';
import { SessionProviderProps } from './props';
import { SessionProviderValue } from './types';

export function SessionProvider({ children }: SessionProviderProps) {
  const [cookies] = useCookies();

  const [state, dispatch] = useReducer(reduce, INITIAL_STATE);

  const setSession = useCallback(async () => {
    const profile: object | null = await fetchProfile();

    dispatch({
      type: 'SET_SESSION',
      profile
    });
  }, [dispatch]);

  const unsetSession = useCallback(async () => {
    dispatch({
      type: 'UNSET_SESSION'
    });
  }, [dispatch]);

  const value: SessionProviderValue = useMemo(() => ({
    ...state,
    setSession,
    unsetSession
  }), [state, setSession, unsetSession]);

  useEffect(() => {
    const token: string = cookies[SESSION_COOKIE_NAME];

    if (isTokenValid(token)) {
      setSession().then().catch((error: unknown) => showNotification({
        message: `We could not validate your session because ${(error as Error).message}. Please login again.`,
        color: 'red'
      }));
    }
  }, [cookies]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

