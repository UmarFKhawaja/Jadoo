import dayjs, { Dayjs } from 'dayjs';
import { decodeJwt } from 'jose';
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

export function isTokenValid(token: string): boolean {
  const session = decodeJwt(token);

  const expiresAt: Dayjs = dayjs((session.exp as number) * 1000);
  const checkedAt: Dayjs = dayjs();
  const isValid: boolean = expiresAt.isAfter(checkedAt);

  return isValid;
}

export async function fetchProfile(): Promise<object> {
  try {
    const response: Response = await fetch(`/api/auth/profile`, {
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
