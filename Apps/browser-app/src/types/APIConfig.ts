export interface APIConfig {
  auth: {
    register: string;
    login: {
      password: string;
    },
    logout: string;
  },
  profile: string;
  graphql: string;
}
