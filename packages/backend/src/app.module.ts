import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { dbConfig } from './config/mikro-orm.config';
import { IceCreamController } from './modules/ice-cream/controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    /*KeeperModule.registerPluginsAsync()*/ MikroOrmModule.forRoot(dbConfig),
  ],
  controllers: [AppController, IceCreamController],
})
export class AppModule {}
