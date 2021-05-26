import { Migration } from '@mikro-orm/migrations';

export class Migration20210524034021 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "IceCream" add constraint "IceCream_provider_foreign" foreign key ("provider") references "IceCreamProvider" ("id") on update cascade;',
    );
  }
}
