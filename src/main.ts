import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //locaal: http://127.0.0.1:5500
  //prod: https://mangostar1.github.io
  
  app.enableCors({
    origin: 'https://mangostar1.github.io',
  });

  app.useGlobalPipes(new ValidationPipe)
  
  await app.listen(process.env.PORT);
}
bootstrap();
