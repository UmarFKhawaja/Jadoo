import { useMemo, useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { Solution, SolutionCard, SolutionSkeleton } from '@jadoo/ui-module';
import { useInfiniteData } from '../../hooks';
import { getSolutionsQuery } from './commands';

export function BrowseSolutionsElement() {
  const [skip, setSkip] = useState<number>(0);

  const take: number = 12;

  const query = useMemo(() => getSolutionsQuery(skip, take), [skip, take]);

  const data = useInfiniteData<Solution>({
    name: 'getSolutions',
    command: query.toString(),
    variables: query.variable,
    skip,
    take,
    setSkip
  });

  return (
    <Container fluid>
      <SimpleGrid cols={4}>
        {
          data.items
            ? data.items.map((solution: Solution) => <SolutionCard key={solution.id} solution={solution}/>)
            : <SolutionSkeleton/>
        }
      </SimpleGrid>
    </Container>
  );
}
