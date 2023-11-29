import { useCallback, useContext } from 'react';
import { NavigateFunction } from 'react-router';
import { SessionContext } from '../contexts';
import { SessionType } from '../types';

export function useSession(navigate: NavigateFunction): SessionType {
  const { isAuthenticated, invalidateAuthentication, handleLogout } = useContext(SessionContext);

  const logout = useCallback(() => handleLogout(navigate), [navigate, handleLogout]);

  return {
    isAuthenticated,
    invalidateAuthentication,
    logout
  };
}
