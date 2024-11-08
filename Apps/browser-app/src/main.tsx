import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider as FrameworkProvider } from '@mantine/core';
import { Notifications as NotificationsProvider } from '@mantine/notifications';
import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.layer.css';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FrameworkProvider>
      <NotificationsProvider/>
      <RouterProvider router={router}/>
    </FrameworkProvider>
  </StrictMode>
);
