import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders:
      'Origin, Content-Type, Accept, Authorization, Content-Range, range, Referer',
    exposedHeaders: 'Content-Range',
  });

  await app.listen(3000);
}
bootstrap();
