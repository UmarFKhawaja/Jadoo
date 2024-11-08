import { Box, Button, Container, Paper, Title } from '@mantine/core';
import { useData } from './hooks';
import styles from './styles.module.css';

export function SignOutFeature() {
  const {
    submit
  } = useData();

  return (
    <Box className={styles.hero}>
      <Container size={420} my={40}>
        <Title ta="center" className={styles.title}>
          Au revoir!
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Button size="lg" fullWidth mt="md" onClick={submit}>
            Sign out
          </Button>
          <Button variant="outline" size="lg" fullWidth mt="md">
            Cancel
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
