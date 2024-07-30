import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseConnectionModule } from 'src/database-connection/database-connection.module';

@Module({
  imports: [DatabaseConnectionModule],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
