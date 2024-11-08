import { Outlet } from 'react-router';
import { Box } from '@mantine/core';
import { Header } from '../../components';

export function BrowseLayout() {
  return (
    <Box>
      <Header/>
      <Outlet/>
    </Box>
  );
}
