import { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { Config, useSession } from '@jadoo/ui-module';
import { SignInForm } from '../types';

export function useData(config: Config) {
  const navigate: NavigateFunction = useNavigate();

  const { invalidateAuthentication } = useSession(navigate);

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

    const response: Response = await fetch(`${config.server.url}/auth/login/password`, {
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

      invalidateAuthentication();

      navigate('/manage');
    }
  }, [config, navigate, invalidateAuthentication]);

  return {
    form,
    submit
  };
}
