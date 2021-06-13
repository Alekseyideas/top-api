import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';

@Module({
  controllers: [TopPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel, // берем модель класса
        schemaOptions: {
          collection: 'TopPage', // если не указать collection по дефолту будет называться - TopPageModel
        },
      },
    ]),
  ],
})
export class TopPageModule {}
