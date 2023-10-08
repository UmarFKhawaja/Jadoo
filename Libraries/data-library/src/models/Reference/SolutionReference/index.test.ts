import { Identifier } from '@jadoo/core-library';
import { SolutionReference } from '..';

describe('SolutionReference', () => {
  describe('create', () => {
    it('creates an solution reference', () => {
      const solutionReference: SolutionReference = SolutionReference.create({
        kind: 'SolutionReference',
        name: 'finance'
      });

      expect(solutionReference).toBeInstanceOf(SolutionReference);
      expect(solutionReference.name).toBeInstanceOf(Identifier);
      expect(solutionReference.name.paramCase).toEqual('finance');
    });

    it('does not create a solution reference without a name', () => {
      expect(() => {
        SolutionReference.create({
          kind: 'SolutionReference',
          name: ''
        });
      }).toThrowError('invalid solution reference');
    });
  });
});
