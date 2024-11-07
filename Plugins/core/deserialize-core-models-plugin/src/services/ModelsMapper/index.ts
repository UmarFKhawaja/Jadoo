import { deserializeYAML, File, toPascalCase } from '@jadoo/core-library';
import { ModelKind, ModelSpec } from '@jadoo/data-library';

export class ModelsMapper {
  constructor() {
  }

  map(files: File[]): Map<ModelKind, Map<string, ModelSpec>> {
    const map: Map<ModelKind, Map<string, ModelSpec>> = files.reduce((result: Map<ModelKind, Map<string, ModelSpec>>, file: File) => {
      const text: string = file.content.toString();
      const model: Record<string, any> = deserializeYAML(text);

      const modelKind: ModelKind = this.findModelKind(model);
      const modelName: string = this.findModelName(model, modelKind);
      const modelOptions: Record<string, any> = this.findModelOptions(model, modelKind);

      const modelSpec: ModelSpec = {
        kind: modelKind,
        name: modelName,
        options: modelOptions
      };

      result.get(modelKind)!.set(modelName, modelSpec);

      return result;
    }, new Map<ModelKind, Map<string, ModelSpec>>(
      [
        ['Solution', new Map<string, ModelSpec>()],
        ['Schema', new Map<string, ModelSpec>()],
        ['Entity', new Map<string, ModelSpec>()],
        ['Enum', new Map<string, ModelSpec>()]
      ]
    ));

    return map;
  }

  private findModelKind(model: Record<string, any>): ModelKind {
    return model.kind as ModelKind;
  }

  private findModelName(model: Record<string, any>, modelKind: ModelKind): string {
    let parts: string[];

    const {
      metadata: {
        name
      }
    } = model;

    switch (modelKind) {
      case 'Solution':
        parts = [name];
        break;

      case 'Schema': {
        const {
          spec: {
            solution: {
              ref
            }
          }
        } = model;

        parts = [ref, name];
        break;
      }

      case 'Entity':
      case 'Enum': {
        const {
          spec: {
            schema: {
              ref
            }
          }
        } = model;

        parts = [...ref.reverse(), name];
        break;
      }

      default:
        throw new Error(`unsupported model kind ${modelKind}`);
    }

    return parts.map((part: string) => toPascalCase(part)).join('.');
  }

  private findModelOptions(model: Record<string, any>, modelKind: ModelKind): Record<string, any> {
    let options: Record<string, any> = {};

    const {
      spec
    } = model;

    switch (modelKind) {
      case 'Solution':
        options = spec;
        break;

      case 'Schema': {
        const {
          solution,
          ...rest
        } = spec;

        options = rest;
        break;
      }

      case 'Entity':
      case 'Enum': {
        const {
          schema,
          ...rest
        } = spec;

        options = rest;
      }
    }

    return options;
  }
}
