import { ReactNode } from 'react';
import { Config } from '../../../types';

export interface SessionProviderProps {
  config: Config;

  children?: ReactNode;
}
