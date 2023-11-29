import { ActionIcon, Card, Group, rem, Skeleton, useMantineTheme } from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import { styles } from './styles';

export function SolutionSkeleton() {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={styles.card}>
      <Card.Section>
        <Skeleton height={180} className={styles.noBorderRadius}/>
      </Card.Section>

      <Skeleton height={24} mt="md"/>

      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs" width="75%"/>

      <Group justify="space-between" className={styles.footer}>
        <Skeleton height={24} width={24} circle/>

        <Group gap={8} mr={0}>
          <ActionIcon className={styles.action} disabled>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[6]}/>
          </ActionIcon>
          <ActionIcon className={styles.action} disabled>
            <IconBookmark style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[7]}/>
          </ActionIcon>
          <ActionIcon className={styles.action} disabled>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[6]}/>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
