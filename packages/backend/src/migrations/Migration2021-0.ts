import { Migration } from '@mikro-orm/migrations';

export class Migration20210524034020 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "IceCreamProvider" ("id" serial primary key, "flavor" jsonb not null);',
    );
  }
}
