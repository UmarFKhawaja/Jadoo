import { GRPC } from '@cerbos/grpc';
import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';
import { AUTH_CONFIG, CACHE_CONFIG, DATABASE_CONFIG } from '../configs';
import { makeAuthConnector, makeCacheConnector, makeDataSourceConnector } from '../methods';

export const AUTH: GRPC = makeAuthConnector(AUTH_CONFIG);

export const CACHE: Redis = makeCacheConnector(CACHE_CONFIG);

export const DATA_SOURCE: DataSource = makeDataSourceConnector(DATABASE_CONFIG);
