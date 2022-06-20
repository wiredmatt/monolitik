import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '../../prisma.service'
import { AssetsController } from './assets.controller'
import { AssetsService } from './assets.service'

describe('AssetsController', () => {
  let controller: AssetsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      {
        controllers: [AssetsController],
        providers: [AssetsService, PrismaService]
      }
    ).compile()

    controller = module.get<AssetsController>(AssetsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
