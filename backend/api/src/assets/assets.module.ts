import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AssetsController } from './assets.controller'
import { AssetsService } from './assets.service'

@Module({
  controllers: [AssetsController],
  providers: [AssetsService, PrismaService]
})
export class AssetsModule {}
