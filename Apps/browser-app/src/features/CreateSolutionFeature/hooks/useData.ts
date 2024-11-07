import { useCallback } from 'react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { CreateSolutionForm } from '../types';

export function useData() {
  const form: UseFormReturnType<CreateSolutionForm> = useForm<CreateSolutionForm>({
    initialValues: {
      solution: {
        title: '',
        description: ''
      }
    },
    validate: {
      solution: {
        title: (value: string): boolean => !value,
        description: (value: string): boolean => !value
      }
    }
  });

  const submit = useCallback(async (values: CreateSolutionForm): Promise<void> => {
    console.log(values);
  }, [form]);

  return {
    form,
    submit
  };
}
