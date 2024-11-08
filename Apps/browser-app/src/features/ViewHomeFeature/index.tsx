import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import { useSession } from '../../providers';
import styles from './styles.module.css';

export function ViewHomeFeature() {
  const { isAuthenticated } = useSession();

  return (
    <Box className={styles.hero}>
      <Container className={styles.container} size="md">
        <Title className={styles.title}>Backend-as-a-Service</Title>
        <Stack mt="xl">
          <Text className={styles.description}>
            Build a fully functional backend from an entity relationship definition
          </Text>
          <Text className={styles.description}>
            Go from a definition to a fully-deployed version at the push of a button
          </Text>
          <Text className={styles.description}>
            Add custom functions as needed on top of what we generate for you
          </Text>
        </Stack>
        <Button component={Link} variant="gradient" size="xl" className={styles.control} to={isAuthenticated ? '/manage' : '/sign-in'}>
          Get started
        </Button>
      </Container>
    </Box>
  );
}
