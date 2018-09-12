import { Get, Post, Body, Controller, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): Promise<Product[]> {
      return this.productService.findAll();
    }

    @Get(':name')
    getProductByName(@Param() params: any): Promise<Product> {
      return this.productService.findByName(params.name);
    }

    @Post()
    createProduct(@Body() body: Product) {
      if (body && body.name && body.description) {
        return this.productService.createProduct(body);
      }
    }
}
