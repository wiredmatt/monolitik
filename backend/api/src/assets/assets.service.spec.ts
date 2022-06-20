import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '../prisma.service'
import { AssetsService } from './assets.service'

describe('AssetsService', () => {
  let service: AssetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      {
        providers: [AssetsService, PrismaService]
      }
    ).compile()

    service = module.get<AssetsService>(AssetsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
