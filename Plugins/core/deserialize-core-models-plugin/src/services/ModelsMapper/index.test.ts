import * as fs from 'fs';
import { File } from '@jadoo/core-library';
import { ModelKind, ModelSpec } from '@jadoo/data-library';
import { FilesProvider } from '../FilesProvider';
import { ModelsMapper } from '.';

describe('ModelsMapper', () => {
  it('maps supported models', () => {
    const filesProvider: FilesProvider = new FilesProvider();
    const modelsMapper: ModelsMapper = new ModelsMapper();

    const files: File[] = filesProvider.provide('../../../Examples');
    const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);

    expect(map.has('Solution')).toEqual(true);
    expect(Array.from(map.get('Solution')!.values()!).length).toEqual(3);
    expect(map.has('Schema')).toEqual(true);
    expect(Array.from(map.get('Schema')!.values()!).length).toEqual(4);
    expect(map.has('Entity')).toEqual(true);
    expect(Array.from(map.get('Entity')!.values()!).length).toEqual(13);
    expect(map.has('Enum')).toEqual(true);
    expect(Array.from(map.get('Enum')!.values()!).length).toEqual(5);
  });

  it('does not map unsupported models', () => {
    fs.writeFileSync('../../../Examples/Jadoo/unknown.yaml', `kind: 'Unknown'
apiVersion: v1
metadata:
  name: unknown
    `);

    expect(() => {
      const filesProvider: FilesProvider = new FilesProvider();
      const modelsMapper: ModelsMapper = new ModelsMapper();

      const files: File[] = filesProvider.provide('../../../Examples');
      const map: Map<ModelKind, Map<string, ModelSpec>> = modelsMapper.map(files);
    }).toThrowError(`unsupported model kind Unknown`);

    fs.rmSync('../../../Examples/Jadoo/unknown.yaml');
  });
});