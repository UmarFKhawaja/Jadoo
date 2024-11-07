import { useCallback, useMemo, useReducer } from 'react';
import { INITIAL_STATE } from './constants';
import { SessionContext } from './contexts';
import { fetchProfile, reduce } from './methods';
import { SessionProviderProps } from './props';
import { SessionProviderValue } from './types';

export function SessionProvider({ children }: SessionProviderProps) {
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

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

