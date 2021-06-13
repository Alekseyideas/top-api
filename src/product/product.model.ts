import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
  @prop()
  name: string;

  @prop()
  value: string;
}
export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
  @prop()
  image: string;
  @prop()
  title: string;

  @prop()
  price: number;

  @prop()
  oldPrice: number;

  @prop()
  credit: number;

  @prop()
  calculatedRating: number;

  @prop()
  description: string;

  @prop()
  advantages: string;

  @prop()
  disAdvantages: string;

  @prop({
    type: () => [String], // обозначили что в categories всегда должен быть массив строк
  })
  categories: string[];

  @prop({
    type: () => [String], // обозначили что в tags всегда должен быть массив строк
  })
  tags: string;

  @prop({
    type: () => [ProductCharacteristic],
    _id: false, // удаляем id обьекта
  })
  characteristics: ProductCharacteristic[];
}
