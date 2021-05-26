import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { EntityCaseNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

var path = require('path');
path;
const requireContext = require('require-context');

require('dotenv').config();
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

import { basename } from 'path';

const migrations = {};

function importAll(r) {
  r.keys().forEach(
    (key) => (migrations[basename(key)] = Object.values(r(key))[0]),
  );
}

importAll(
  requireContext(__dirname.replace('config', 'migrations'), false, /\.js$/),
);
const migrationsList = Object.keys(migrations).map((migrationName) => ({
  name: migrationName,
  class: migrations[migrationName],
}));
export const dbConfig = {
  metadataProvider: TsMorphMetadataProvider,
  namingStrategy: EntityCaseNamingStrategy,
  entitiesTs: ['./src/**/*model.ts'],
  entities: ['./dist/src/modules/**/*model.js'],
  dbName: 'test1',
  user,
  password,
  debug: process.env.NODE_ENV === 'development',
  logger: console.log.bind(console),
  type: 'postgresql' as const,
  
  migrations: {
    //allOrNothing: true,
    /*path: './migrations',
    tableName: 'migrations',
    emit: 'ts',
    pattern: /^[\w-]+\d+\.ts$/,*/

    migrationsList,
  },
} as MikroOrmModuleSyncOptions;
