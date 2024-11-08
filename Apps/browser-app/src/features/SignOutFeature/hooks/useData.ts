import { useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { showNotification } from '@mantine/notifications';
import { useSession } from '../../../providers';
import { config } from '../../../config';

export function useData() {
  const navigate: NavigateFunction = useNavigate();

  const { unsetSession } = useSession();

  const submit = useCallback(async (): Promise<void> => {
    const response: Response = await fetch(config.api.auth.logout, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign out you successfully at this time. Check details and try again, or clear your cookies.',
        color: 'red'
      });
    } else {
      showNotification({
        message: 'We have signed you out successfully.',
        color: 'green'
      });

      await unsetSession();

      navigate('/');
    }
  }, [config, navigate, unsetSession]);

  return {
    submit
  };
}
