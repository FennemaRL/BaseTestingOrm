import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeeperModule } from './module-keeper';
import { IceCreamController } from './modules/ice-cream/controller';

@Module({
  imports: [/*KeeperModule.registerPluginsAsync()*/],
  controllers: [AppController,IceCreamController],
  providers: [AppService],
})
export class AppModule {}
