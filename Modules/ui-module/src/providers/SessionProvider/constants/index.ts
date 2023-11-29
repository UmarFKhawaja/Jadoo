import { SessionContextType } from '../types';

export const INITIAL_VALUE: SessionContextType = {
  isAuthenticated: false,
  invalidateAuthentication: () => {},
  handleLogout: () => {}
};
