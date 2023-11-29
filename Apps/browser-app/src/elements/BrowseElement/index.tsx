import { Outlet } from 'react-router';
import { Box } from '@mantine/core';
import { Header } from '@jadoo/ui-module';

export function BrowseElement() {
  return (
    <Box>
      <Header/>
      <Outlet/>
    </Box>
  );
}
