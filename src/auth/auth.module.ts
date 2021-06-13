import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthController } from './auth.controller';
import { AuthModel } from './auth.model';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel, // берем модель класса
        schemaOptions: {
          collection: 'Auth', // если не указать collection по дефолту будет называться - AuthModel
        },
      },
    ]),
  ],
})
export class AuthModule {}
