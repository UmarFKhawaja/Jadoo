import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useFiniteData } from '../../hooks';
import { FiniteDataResponse, Solution } from '../../types';
import { getSolutionsQuery } from './commands';
import { SolutionData } from './types';

export function ManageSolutionsFeature() {
  const query = useMemo(getSolutionsQuery, []);

  const data: FiniteDataResponse<SolutionData> = useFiniteData<SolutionData>({
    name: 'getSolutions',
    command: query.toString(),
    variables: query.variable
  });

  return (
    <>
      <Box>
        <Button component={Link} variant="transparent" to="/create/solution">
          <IconPlus/>
          <Text ml="xs">Create new solution</Text>
        </Button>
        {
          data.data?.solutions?.map((solution: Solution) => (
            <Text key={solution.id}>{solution.title}</Text>
          ))
        }
      </Box>
    </>
  );
}
