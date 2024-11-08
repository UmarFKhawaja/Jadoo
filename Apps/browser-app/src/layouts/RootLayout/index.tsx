import { CookiesProvider } from 'react-cookie';
import { Outlet } from 'react-router';
import { COOKIES_PROVIDER_DEFAULT_SET_OPTIONS } from '../../constants';
import { SessionProvider } from '../../providers';

export function RootLayout() {
  return (
    <CookiesProvider defaultSetOptions={COOKIES_PROVIDER_DEFAULT_SET_OPTIONS}>
      <SessionProvider>
        <Outlet/>
      </SessionProvider>
    </CookiesProvider>
  );
}
