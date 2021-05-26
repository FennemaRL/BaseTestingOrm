import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { migrate } from './helpers/migrate';
async function bootstrap() {
  await migrate();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
