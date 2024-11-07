import { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { Config, useSession } from '@jadoo/ui-module';
import { SignInForm } from '../types';

export function useData(config: Config) {
  const navigate: NavigateFunction = useNavigate();

  const { setSession } = useSession();

  const form: UseFormReturnType<SignInForm> = useForm<SignInForm>({
    initialValues: {
      username: '',
      password: ''
    },
    validate: {
      username: (value: string): boolean => !value,
      password: (value: string): boolean => !value
    }
  });

  const submit = useCallback(async (values: SignInForm): Promise<void> => {
    const {
      username,
      password
    }: SignInForm = values;

    const response: Response = await fetch(`/api/auth/login/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password
      })
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign in you successfully at this time. Check details and try again.',
        color: 'red'
      });
    } else {
      showNotification({
        message: 'We have signed you in successfully.',
        color: 'green'
      });

      await setSession();

      navigate('/manage');
    }
  }, [config, navigate, setSession]);

  return {
    form,
    submit
  };
}
