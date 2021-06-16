import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from './review.model';

// nest g service review
@Injectable()
export class ReviewService {
  constructor(
    @Inject(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>,
  ) {}
}
