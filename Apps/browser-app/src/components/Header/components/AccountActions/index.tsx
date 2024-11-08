import { Link } from 'react-router-dom';
import { ActionIcon, Button, Group } from '@mantine/core';
import { IconHexagons, IconLayoutDashboard, IconSettings, IconUser } from '@tabler/icons-react';
import { useSession } from '../../../../providers';

export function AccountActions() {
  const { isAuthenticated } = useSession();

  return (
    <Group gap={8}>
      {
        isAuthenticated
          ? (
            <>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage">
                <IconLayoutDashboard/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/solutions">
                <IconHexagons/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/profile">
                <IconUser/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/settings">
                <IconSettings/>
              </ActionIcon>
              <Button component={Link} variant="default" to="/sign-out">Sign out</Button>
            </>
          )
          : (
            <>
              <Button component={Link} variant="default" to="/sign-in">Sign in</Button>
              <Button component={Link} to="/sign-up">Sign up</Button>
            </>
          )
      }
    </Group>
  );
}
