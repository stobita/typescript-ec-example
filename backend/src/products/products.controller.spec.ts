import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('Products Controller', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        { provide: getRepositoryToken(Product), useClass: Repository },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result: Product[] = [
        {
          id: 1,
          name: 'test',
          price: 100,
        },
      ];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    });
  });
  describe('findOne', () => {
    it('should return a product', async () => {
      const result: Product = {
        id: 1,
        name: 'test',
        price: 200,
      };
      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => Promise.resolve(result));
      expect(await controller.findOne(1)).toBe(result);
    });
  });
});
