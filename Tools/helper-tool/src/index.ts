import 'reflect-metadata';
import { faker } from '@faker-js/faker';

export function run() {
  // @ts-ignore
  const solution = {
    id: faker.string.uuid()
  };

  console.log(solution);
}
