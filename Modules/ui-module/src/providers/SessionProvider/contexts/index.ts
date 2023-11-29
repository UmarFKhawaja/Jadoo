import { Context, createContext } from 'react';
import { INITIAL_VALUE } from '../constants';
import { SessionContextType } from '../types';

export const SessionContext: Context<SessionContextType> = createContext<SessionContextType>(INITIAL_VALUE);
