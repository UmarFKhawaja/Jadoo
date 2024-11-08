import { SessionProviderAction, SessionProviderState } from './types';

export function reduce(state: SessionProviderState, action: SessionProviderAction): SessionProviderState {
  switch (action.type) {
    case 'SET_SESSION':
      return {
        ...state,
        profile: action.profile,
        isAuthenticated: true
      };

    case 'UNSET_SESSION':
      return {
        ...state,
        profile: {},
        isAuthenticated: false
      };

    default:
      return state;
  }
}

export async function fetchProfile(): Promise<object> {
  try {
    const response: Response = await fetch(`/api/profile`, {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      return {};
    }

    const profile: object = await response.json() as object;

    return profile;
  } catch (error: unknown) {
    return {};
  }
}
