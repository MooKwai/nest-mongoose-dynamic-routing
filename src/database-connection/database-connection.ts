import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Connection, createConnection } from 'mongoose';

@Injectable({ scope: Scope.REQUEST })
export class DatabaseConnection {
  private connection: Connection;

  constructor(@Inject(REQUEST) private readonly request: Request) {
    const firmId = this.request.headers['firmid'] as string;

    const uri = this.getConnectionString(firmId);
    this.connection = createConnection(uri);
  }

  private getConnectionString(firmId: string): string {
    switch (firmId) {
      case 'firm1':
        return process.env.MONGODB_URI_FIRM1;
      case 'firm2':
        return process.env.MONGODB_URI_FIRM2;
      default:
        throw new Error('Invalid firmId');
    }
  }

  public getConnection(): Connection {
    return this.connection;
  }
}
