import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  async findAll() {
    return await this.prisma.user.findMany();
  }
}
