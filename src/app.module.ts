import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  }),
    ProductModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
