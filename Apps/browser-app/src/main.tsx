import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { MantineProvider as FrameworkProvider } from '@mantine/core';
import { Notifications as NotificationsProvider } from '@mantine/notifications';
import { SessionProvider } from '@jadoo/ui-module';
import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.layer.css';
import { COOKIES_PROVIDER_DEFAULT_SET_OPTIONS } from './constants';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={COOKIES_PROVIDER_DEFAULT_SET_OPTIONS}>
      <SessionProvider>
        <FrameworkProvider>
          <NotificationsProvider/>
          <RouterProvider router={router}/>
        </FrameworkProvider>
      </SessionProvider>
    </CookiesProvider>
  </StrictMode>
);
