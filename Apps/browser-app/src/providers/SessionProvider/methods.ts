import { config } from '../../config';
import { SessionProviderAction, SessionProviderState } from './types';

export function reduce(state: SessionProviderState, action: SessionProviderAction): SessionProviderState {
  switch (action.type) {
    case 'SET_SESSION':
      console.log(action.profile);
      return {
        ...state,
        profile: action.profile,
        isAuthenticated: Object.keys(action.profile).length > 0
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
    const response: Response = await fetch(config.api.profile, {
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
