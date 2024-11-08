import { Outlet } from 'react-router';
import { SessionProvider } from '../../providers';

export function RootLayout() {
  return (
    <SessionProvider>
      <Outlet/>
    </SessionProvider>
  );
}
