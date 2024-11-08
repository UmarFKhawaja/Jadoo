import { useContext } from 'react';
import { SessionContext } from './contexts';
import { SessionProviderValue } from './types';

export function useSession(): SessionProviderValue {
  return useContext(SessionContext);
}
