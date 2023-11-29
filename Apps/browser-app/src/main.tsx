import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { MantineProvider as FrameworkProvider } from '@mantine/core';
import { Notifications as NotificationsProvider } from '@mantine/notifications';
import { SessionProvider } from '@jadoo/ui-module';
import { COOKIES_PROVIDER_DEFAULT_SET_OPTIONS } from './constants';
import { config } from './config';
import { router } from './router';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={COOKIES_PROVIDER_DEFAULT_SET_OPTIONS}>
      <SessionProvider config={config}>
        <FrameworkProvider>
          <NotificationsProvider/>
          <RouterProvider router={router}/>
        </FrameworkProvider>
      </SessionProvider>
    </CookiesProvider>
  </StrictMode>
);
