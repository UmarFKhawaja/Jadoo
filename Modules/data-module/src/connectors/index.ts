import { GRPC } from '@cerbos/grpc';
import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { makeAuthConnector, makeCacheConnector, makeDataSourceConnector } from '../methods';
import { CONFIG } from '../config';

export const DATA_SOURCE: DataSource = makeDataSourceConnector(CONFIG);

export const CACHE: Redis = makeCacheConnector(CONFIG);

export const AUTH: GRPC = makeAuthConnector(CONFIG);
