import { MikroORM } from '@mikro-orm/core';
import { dbConfig } from '../config/mikro-orm.config';

export const migrate = async () => {
  const orm = await MikroORM.init(dbConfig);

  const migrator = orm.getMigrator();
  await migrator.up(); // creates file Migration20191019195930.ts
  //await migrator.up(); // runs migrations up to the latest
  //await migrator.up('up-to-name'); // runs migrations up to given version
  //await migrator.down('down-to-name'); // runs migrations down to given version
  //await migrator.down(); // migrates one step down
  //await migrator.down({ to: 0 }); // migrates down to the first version

  await orm.close(true);
};
