import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
        .spyOn(repository, 'find')
        .mockImplementation(() => Promise.resolve(result));
      expect(await service.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return product', async () => {
      const result: Product = {
        id: 1,
        name: 'test',
        price: 200,
      };
      jest
        .spyOn(repository, 'findOne')
        .mockImplementation(() => Promise.resolve(result));
      expect(await service.findOne(1)).toBe(result);
    });
  });
});
