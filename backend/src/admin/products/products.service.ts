import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from 'src/products/create-product.dto';
import { UpdateProductDto } from 'src/products/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  create(input: CreateProductDto) {
    const product = new Product();
    product.name = input.name;
    product.price = input.price;
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    return this.productsRepository.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne(id);
    product.name = updateProductDto.name;
    return this.productsRepository.save(product);
  }

  async remove(id: string) {
    await this.productsRepository.delete(id);
  }
}
