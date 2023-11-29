import { useCallback } from 'react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { CreateSolutionForm, Step } from '../types';

export function useData() {
  const form: UseFormReturnType<CreateSolutionForm> = useForm<CreateSolutionForm>({
    initialValues: {
      solution: {
        title: '',
        description: '',
        steps: []
      }
    },
    validate: {
      solution: {
        title: (value: string): boolean => !value,
        description: (value: string): boolean => !value,
        steps: {
          description: (value: string): boolean => !value,
          tasks: {
            description: (value: string): boolean => !value,
            ingredients: {
              description: (value: string): boolean => !value,
              quantity: (value: number): boolean => value >= 0,
              unit: {
                id: (value: string): boolean => !value
              }
            }
          }
        }
      }
    }
  });

  const submit = useCallback(async (values: CreateSolutionForm) => {
    console.log(values);
  }, [form]);

  const addStep = useCallback(() => {
    let steps: Step[] = form.values.solution.steps;

    const step: Step = {
      order: steps.length,
      description: '',
      tasks: []
    };

    steps = steps.concat([step]);

    form.setFieldValue('solution.steps', steps);
  }, [form]);

  const removeStep = useCallback((step: Step) => {
    console.log(step);
    let steps: Step[] = form.values.solution.steps;

    steps = steps
      .filter((_: Step) => _.order !== step.order)
      .map((_: Step, index: number) => ({
        ..._,
        order: index
      }));

    form.setFieldValue('solution.steps', steps);
  }, [form]);

  return {
    form,
    submit,
    addStep,
    removeStep
  };
}
