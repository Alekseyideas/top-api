import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// интерфейс создали для ексопрта нескольких классов, Base добваляет _id __v __t;
export interface AuthModel extends Base {}
// TimeStamps добваляет createdAt и updatedAt;
export class AuthModel extends TimeStamps {
  // prop для связи с базой данных
  @prop({
    // index: true, // делаем индексом в базе данных
    unique: true, // делаем уникальным и по дефолту cтановиться индексом
  })
  email: string;

  @prop()
  passwordHash: string;
}
