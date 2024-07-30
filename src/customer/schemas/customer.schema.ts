import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  _id: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
