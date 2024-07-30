import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseConnection } from '../database-connection/database-connection';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private model: Model<Customer>;

  constructor(private readonly dbConnectionProvider: DatabaseConnection) {
    const connection = this.dbConnectionProvider.getConnection();
    this.model = connection.model<Customer>('Customer', CustomerSchema);
  }

  async findAll(): Promise<Customer[]> {
    return this.model.find().exec();
  }

  async create(customerDetails: CreateCustomerDto): Promise<Customer> {
    const customer = new this.model(customerDetails);
    return customer.save();
  }
}
