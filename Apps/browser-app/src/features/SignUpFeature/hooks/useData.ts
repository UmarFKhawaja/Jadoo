import { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { config } from '../../../config';
import { SignUpForm } from '../types';

export function useData() {
  const navigate: NavigateFunction = useNavigate();

  const form: UseFormReturnType<SignUpForm> = useForm<SignUpForm>({
    initialValues: {
      displayName: '',
      userName: '',
      emailAddress: '',
      password1: '',
      password2: ''
    },
    validate: {
      displayName: (value: string): boolean => !value,
      userName: (value: string): boolean => !value,
      emailAddress: (value: string): boolean => !value,
      password1: (value: string): boolean => !value,
      password2: (value: string): boolean => !value
    }
  });

  const submit = useCallback(async (values: SignUpForm): Promise<void> => {
    const {
      displayName,
      userName,
      emailAddress,
      password1,
      password2
    }: SignUpForm = values;

    if (password1 !== password2) {
      form.setErrors({
        password1: 'Password must be confirmed',
        password2: 'Password must be confirmed'
      });
    }

    const response: Response = await fetch(config.api.auth.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        displayName,
        userName,
        emailAddress,
        password: password1 || password2
      })
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign you up successfully at this time. Check details and try again.',
        color: 'red'
      });
    } else {
      showNotification({
        message: 'We have signed you up successfully. Sign in with your user name/email address and password.',
        color: 'green'
      });

      navigate('/sign-in');
    }
  }, [config, navigate, form]);

  return {
    form,
    submit
  };
}
