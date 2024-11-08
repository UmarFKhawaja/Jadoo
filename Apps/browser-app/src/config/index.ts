import { APIConfig, Config } from '../types';

export const config: Config = {
  api: makeAPIConfig()
};

function makeAPIConfig(): APIConfig {
  const api: APIConfig = {
    auth: {
      register: '/api/auth/register',
      login: {
        password: '/api/auth/login/password'
      },
      logout: '/api/auth/logout'
    },
    profile: '/api/profile',
    graphql: '/api/graphql'
  };

  return api;
}
