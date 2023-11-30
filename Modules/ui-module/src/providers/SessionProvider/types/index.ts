import { NavigateFunction } from 'react-router';

export interface SessionContextType {
  isAuthenticated: boolean;

  invalidateAuthentication: () => void;

  handleLogout: (navigate: NavigateFunction) => void | Promise<void>;
}

export interface SessionType {
  isAuthenticated: boolean;

  invalidateAuthentication: () => void;

  logout: () => void | Promise<void>;
}
