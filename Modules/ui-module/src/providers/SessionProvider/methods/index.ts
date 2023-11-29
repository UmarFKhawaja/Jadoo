import { SessionProviderConfig } from '../types';

export async function isValidSession(config: SessionProviderConfig): Promise<boolean> {
  try {
    const response = await fetch(`${config.server.url}/auth/check`, {
      method: 'GET',
      credentials: 'include'
    });

    return response.ok;
  } catch (error: unknown) {
    return false;
  }
}
