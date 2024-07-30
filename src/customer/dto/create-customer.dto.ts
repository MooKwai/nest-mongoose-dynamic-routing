import { PickType } from '@nestjs/swagger';
import { Customer } from '../schemas/customer.schema';

export class CreateCustomerDto extends PickType(Customer, [
  '_id',
  'firstName',
  'lastName',
]) {}
