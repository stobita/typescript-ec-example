import { Injectable } from '@nestjs/common';
import { Product } from 'src/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.filter(v => v.id === id);
  }

  update(id: string) {}

  remove(id: string) {}
}
