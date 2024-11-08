import { SessionProviderState, SessionProviderValue } from './types';

export const INITIAL_STATE: SessionProviderState = {
  profile: {},
  isAuthenticated: false
};

export const INITIAL_VALUE: SessionProviderValue = {
  ...INITIAL_STATE,
  setSession: async () => {},
  unsetSession: async () => {}
};
