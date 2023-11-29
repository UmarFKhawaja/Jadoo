import { Outlet } from 'react-router';
import { Box, Container } from '@mantine/core';
import { Header } from '@jadoo/ui-module';
import classes from './styles';

export function ManageElement() {
  return (
    <Box>
      <Header/>
      <Container className={classes.container} size="md">
        <Outlet/>
      </Container>
    </Box>
  );
}
