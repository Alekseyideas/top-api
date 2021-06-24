import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypegooseModule } from 'nestjs-typegoose';
import { getJWTConfig } from '../configs/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModel } from './user.model';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel, // берем модель класса
        schemaOptions: {
          collection: 'User', // если не указать collection по дефолту будет называться - UserModel
        },
      },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJWTConfig,
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
