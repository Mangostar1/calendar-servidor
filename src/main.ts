import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //locaal: http://127.0.0.1:5500
  //prod: https://mangostar1.github.io/Calendar
  
  app.enableCors({
    origin: 'https://mangostar1.github.io/Calendar',
  });
  
  await app.listen(process.env.PORT);
}
bootstrap();
