import { ModelKind } from './ModelKind';

export interface ModelSpec {
  kind: ModelKind;
  name: string;
  options: Record<string, any>;
}
