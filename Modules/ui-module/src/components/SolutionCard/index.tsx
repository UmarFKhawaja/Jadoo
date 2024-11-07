import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  rem,
  Text,
  useMantineTheme
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import { SolutionCardProps } from './props';
import { styles } from './styles';

export function SolutionCard({ solution }: SolutionCardProps) {
  const theme = useMantineTheme();

  const linkProps = {
    href: solution.contentURL,
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Card withBorder radius="md" className={styles.card}>
      <Card.Section>
        <Anchor {...linkProps}>
          <Image src={solution.headerURL} height={180}/>
        </Anchor>
      </Card.Section>

      {
        solution.rating === 'outstanding' && (
          <Badge className={styles.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
            {solution.rating}
          </Badge>
        )
      }

      {
        solution.rating === 'unique' && (
          <Badge className={styles.rating} variant="gradient" gradient={{ from: 'red', to: 'grape' }}>
            {solution.rating}
          </Badge>
        )
      }

      <Text className={styles.title} fw={500} component="a" {...linkProps}>
        {solution.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {solution.description}
      </Text>

      <Group justify="space-between" className={styles.footer}>
        <Center>
          <Avatar
            src={solution.authorURL}
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {solution.authorName}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={styles.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]}/>
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={styles.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]}/>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
