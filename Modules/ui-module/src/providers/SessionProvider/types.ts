export interface SessionProviderState {
  profile: object;
  isAuthenticated: boolean;
}

export interface SessionProviderValue extends SessionProviderState {
  setSession: () => Promise<void>;
  unsetSession: () => Promise<void>;
}

export interface SessionProviderSetSessionAction {
  type: 'SET_SESSION';
  profile: object;
}

export interface SessionProviderUnsetSessionAction {
  type: 'UNSET_SESSION';
}

export type SessionProviderAction =
  | SessionProviderSetSessionAction
  | SessionProviderUnsetSessionAction;
