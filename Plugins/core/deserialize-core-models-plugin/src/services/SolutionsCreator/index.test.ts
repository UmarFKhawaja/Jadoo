import { ModelKind, ModelSpec, Solution } from '@jadoo/data-library';
import { SolutionsCreator } from '.';
import { FilesProvider } from '../FilesProvider';
import { ModelsMapper } from '../ModelsMapper';
import { File } from '@jadoo/core-library';

describe('SolutionsCreator', () => {
  it('creates solutions with correct specs', () => {
    const filesProvider: FilesProvider = new FilesProvider();
    const modelsMapper: ModelsMapper = new ModelsMapper();
    const solutionsCreator: SolutionsCreator = new SolutionsCreator();

    const files: File[] = filesProvider.provide('../../../Examples/Jadoo');
    const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);
    const solutions: Solution[] = solutionsCreator.create(map);

    expect(solutions.length).toEqual(1);
  });

  it('does not create solutions with incorrect entity specs', () => {
    expect(() => {
      const filesProvider: FilesProvider = new FilesProvider();
      const modelsMapper: ModelsMapper = new ModelsMapper();
      const solutionsCreator: SolutionsCreator = new SolutionsCreator();

      const files: File[] = filesProvider.provide('../../../Examples/Teesra');
      const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);
      const solutions: Solution[] = solutionsCreator.create(map);

      expect(solutions).toBeUndefined();
    }).toThrow('unsupported attribute type Error');
  });

  it('does not create solutions with incorrect enum specs', () => {
    expect(() => {
      const filesProvider: FilesProvider = new FilesProvider();
      const modelsMapper: ModelsMapper = new ModelsMapper();
      const solutionsCreator: SolutionsCreator = new SolutionsCreator();

      const files: File[] = filesProvider.provide('../../../Examples/Wrongun');
      const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);
      const solutions: Solution[] = solutionsCreator.create(map);

      expect(solutions).toBeUndefined();
    }).toThrow('unsupported value type Exception');
  });
});
