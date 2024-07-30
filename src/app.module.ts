import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DatabaseConnectionModule } from './database-connection/database-connection.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomerModule, DatabaseConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
