import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';

// nest g service review
@Injectable() // Чтобы указать, что сервис может использоваться в других сервисах, к классу сервиса применяется декоратор Injectable.
export class ReviewService {
  constructor(
    // Dependency Injection
    @InjectModel(ReviewModel)
    private readonly reviewModel: ModelType<ReviewModel>,
  ) {}

  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
  async findByProductId(
    productId: string,
  ): Promise<DocumentType<ReviewModel>[]> {
    return this.reviewModel
      .find({ productId: Types.ObjectId(productId) })
      .exec();
  }
  async deleteByProductId(productId: string) {
    return this.reviewModel
      .deleteMany({ productId: Types.ObjectId(productId) })
      .exec();
  }
}
