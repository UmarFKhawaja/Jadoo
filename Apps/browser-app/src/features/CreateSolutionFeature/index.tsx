import { Button, Container, Group, TextInput } from '@mantine/core';
import { Header } from '../../components';
import { useData } from './hooks';
import styles from './styles.module.css';

export function CreateSolutionFeature() {
  const {
    form,
    submit
  } = useData();

  return (
    <>
      <Header/>
      <Container>
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            classNames={styles}
            mt="md"
            label="Title"
            placeholder="a pithy name for this solution"
            {...form.getInputProps('solution.title')}
          />
          <TextInput
            classNames={styles}
            mt="md"
            label="Description"
            placeholder="an interesting description of this solution"
            {...form.getInputProps('solution.description')}
          />
          <Group justify="right">
            <Button variant="transparent" mt="md" size="lg" type="submit">
              Save
            </Button>
          </Group>
        </form>
      </Container>
    </>
  );
}
