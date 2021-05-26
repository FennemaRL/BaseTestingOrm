import { Migration } from '@mikro-orm/migrations';

export class Migration20210524034019 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "IceCream" ("id" serial primary key, "flavor" jsonb not null, "provider" int4 not null, "weight" int4 not null, "reminder_weight" int4 not null, "shallDonateBeforeExpired" timestamptz(0) not null);',
    );
  }
}
