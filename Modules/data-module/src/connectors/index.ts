import { GRPC } from '@cerbos/grpc';
import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { makeAuthConnector, makeCacheConnector, makeDataSourceConnector } from '../methods';
import { AUTH_CONFIG, CACHE_CONFIG, DATABASE_CONFIG } from '../configs';

export const AUTH: GRPC = makeAuthConnector(AUTH_CONFIG);

export const CACHE: Redis = makeCacheConnector(CACHE_CONFIG);

export const DATA_SOURCE: DataSource = makeDataSourceConnector(DATABASE_CONFIG);
