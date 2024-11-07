import { Identifier } from '@jadoo/core-library';
import { SolutionReference, SolutionReferenceSpec } from '..';

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

  describe('toJSON', () => {
    it('returns SolutionReferenceSpec', () => {
      const solutionReference: SolutionReference = SolutionReference.create({
        kind: 'SolutionReference',
        name: 'jadoo'
      });

      const solutionReferenceSpec: SolutionReferenceSpec = solutionReference.toJSON();

      expect(solutionReferenceSpec).toEqual({
        kind: 'SolutionReference',
        name: 'jadoo'
      });
    });
  });
});
