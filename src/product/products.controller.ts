import { Get, Controller, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}

    @Get()
    getProducts(): Promise<Product[]> {
      return this.productService.findAll();
    }

    @Get(':name')
    getProductByName(@Param() params: any): Promise<Product> {
      return this.productService.findByName(params.name);
    }
}
