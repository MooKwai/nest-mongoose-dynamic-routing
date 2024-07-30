import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get('/')
  listStuff() {
    return this.customerService.findAll();
  }

  @Post('/')
  create(@Body() body: CreateCustomerDto) {
    return this.customerService.create(body);
  }
}
