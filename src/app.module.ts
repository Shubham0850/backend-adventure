import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagicController } from './magic/magic.controller';
import { MagicService } from './magic/magic.service';
import { PrismaController } from './prisma/prisma.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, MagicController, PrismaController],
  providers: [AppService, MagicService, PrismaService],
})
export class AppModule {}
