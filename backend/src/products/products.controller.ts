import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { UpdateProductDto } from './update-product.dto';
import { CreateProductDto } from './create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    this.productService.create({
      id: '',
      ...createProductDto,
    });
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    this.productService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.productService.remove(id);
  }
}
