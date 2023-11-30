import { NavigateFunction } from 'react-router';

export interface SessionContextType {
  isAuthenticated: boolean;

  invalidateAuthentication: () => Promise<void>;

  handleLogout: (navigate: NavigateFunction) => Promise<void>;
}

export interface SessionType {
  isAuthenticated: boolean;

  invalidateAuthentication: () => void;

  logout: () => Promise<void>;
}
