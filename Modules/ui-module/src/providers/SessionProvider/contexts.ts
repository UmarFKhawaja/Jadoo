import { Context, createContext } from 'react';
import { INITIAL_VALUE } from './constants';
import { SessionProviderValue } from './types';

export const SessionContext: Context<SessionProviderValue> = createContext<SessionProviderValue>(INITIAL_VALUE);
