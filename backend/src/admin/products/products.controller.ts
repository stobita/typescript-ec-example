import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Header,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from '../../products/create-product.dto';
import { UpdateProductDto } from '../../products/update-product.dto';
import { ProductsService } from './products.service';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from '@nestjs/common';

@Controller('admin/products')
@Roles('admin')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  @Header('Content-Range', 'bytes 200-1000/67589')
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateProductDto: UpdateProductDto,
  ) {
    this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.productService.remove(id);
  }
}
