import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  //  Omit<ReviewModel, '_id' исключить поле _id;
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('getByProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
