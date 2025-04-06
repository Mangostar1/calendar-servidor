import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_PUBLIC_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false, // ¡Importante! No usar en producción
      autoLoadEntities: true,
      ssl: { // Configuración SSL si es necesario (común en entornos de producción)
        rejectUnauthorized: false, // Puede ser necesario dependiendo de la configuración de Railway
      },
    }),
    AuthModule, 
    UserModule, 
    /* ScheduleModule */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
