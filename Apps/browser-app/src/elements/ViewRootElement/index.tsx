import { Link } from 'react-router-dom';
import { Box, Button, Container, Text, Title } from '@mantine/core';
import { useSession } from '@jadoo/ui-module';
import classes from './styles';
import { useNavigate } from 'react-router';

export function ViewRootElement() {
  const navigate = useNavigate();

  const { isAuthenticated } = useSession(navigate);

  return (
    <Box className={classes.hero}>
      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured solutions resource</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Button component={Link} variant="gradient" size="xl" className={classes.control} to={isAuthenticated ? '/manage' : '/sign-in'}>
          Get started
        </Button>
      </Container>
    </Box>
  );
}
