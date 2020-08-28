import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    AdminModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
