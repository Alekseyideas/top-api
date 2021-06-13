import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductController } from './product.controller';
import { ProductModel } from './product.model';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel, // берем модель класса
        schemaOptions: {
          collection: 'Product', // если не указать collection по дефолту будет называться - ProductModel
        },
      },
    ]),
  ],
})
export class ProductModule {}
