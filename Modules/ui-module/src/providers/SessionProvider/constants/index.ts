import { SessionContextType } from '../types';

export const INITIAL_VALUE: SessionContextType = {
  isAuthenticated: false,
  invalidateAuthentication: async () => {},
  handleLogout: async () => {}
};
