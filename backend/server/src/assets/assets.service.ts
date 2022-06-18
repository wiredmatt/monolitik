import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateAssetDto } from './dto/create-asset.dto'
import { UpdateAssetDto } from './dto/update-asset.dto'

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAssetDto: CreateAssetDto) {
    return this.prismaService.asset.create({
      data: createAssetDto
    })
  }

  findAll() {
    return this.prismaService.asset.findMany()
  }

  findOne(id: number) {
    return this.prismaService.asset.findUnique({
      where: { id }
    })
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return this.prismaService.asset.update({
      where: { id },
      data: updateAssetDto
    })
  }

  remove(id: number) {
    return this.prismaService.asset.delete({
      where: { id }
    })
  }
}
