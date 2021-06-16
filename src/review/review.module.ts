import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

// nest g module review
@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel, // берем модель класса
        schemaOptions: {
          collection: 'Review', // если не указать collection по дефолту будет называться - ReviewModel
        },
      },
    ]),
  ],
  providers: [ReviewService],
})
export class ReviewModule {}
