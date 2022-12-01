import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/scripts/default-index';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      db: {
        url: 'postgresql://postgres:123@localhost:5434/nest',
      },
    });
  }
}
