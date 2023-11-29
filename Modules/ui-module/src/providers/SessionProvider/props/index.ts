import { ReactNode } from 'react';
import { SessionProviderConfig } from '../types';

export interface SessionProviderProps {
  config: SessionProviderConfig;

  children?: ReactNode;
}
