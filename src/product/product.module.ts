import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  components: [ProductService],
  controllers: [ProductsController],
})
export class ProductModule {}
