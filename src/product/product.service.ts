import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>) {
      /*
      const pr1 = new Product();
      pr1.description = 'First Product';
      pr1.name = 'product1';
      this.productRepository.save(pr1);
      */
    }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findByName(name: string): Promise<Product> {
    const result = await this.productRepository.find({ name: name });
    return result[0];
  }
  
  async createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }
}
