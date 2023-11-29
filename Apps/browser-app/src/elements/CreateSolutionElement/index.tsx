import { Anchor, Box, Button, Container, Group, TextInput } from '@mantine/core';
import { Header } from '@jadoo/ui-module';
import { useData } from './hooks';
import classes from './styles';
import { Step } from './types';

export function CreateSolutionElement() {
  const {
    form,
    submit,
    addStep,
    removeStep
  } = useData();

  return (
    <>
      <Header/>
      <Container>
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            classNames={classes}
            mt="md"
            label="Title"
            placeholder="a pithy name for this solution"
            {...form.getInputProps('solution.title')}
          />
          <TextInput
            classNames={classes}
            mt="md"
            label="Description"
            placeholder="an interesting description of this solution"
            {...form.getInputProps('solution.description')}
          />
          <Box mt="md">
            <Anchor onClick={addStep}>
              Add a step
            </Anchor>
          </Box>
          {
            form.values.solution.steps.map((step: Step) => {
              return (
                <Box key={`step-${step.order}`} mt="md">
                  <TextInput
                    classNames={classes}
                    mt="md"
                    label="Description"
                    placeholder="an interesting description of this solution"
                    {...form.getInputProps(`solution.step.${step.order}.description`)}
                  />
                  <Box mt="md">
                    <Anchor onClick={() => removeStep(step)}>
                      Remove this step
                    </Anchor>
                  </Box>
                </Box>
              );
            })
          }
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
