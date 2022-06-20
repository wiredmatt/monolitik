import { Injectable } from '@nestjs/common'
import { ethers } from 'ethers'
import { PrismaService } from '../../prisma.service'
import { TokenizedAsset__factory } from '../../smart-contracts/types'
import { CreateAssetDto } from './dto/create-asset.dto'
import { UpdateAssetDto } from './dto/update-asset.dto'

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAssetDto: CreateAssetDto) {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.BLOCKCHAIN_NODE
    )

    const wallet = new ethers.Wallet(
      process.env.BLOCKCHAIN_PRIVATE_KEY,
      provider
    )

    const tokenizedAssetInterface = new TokenizedAsset__factory(
      wallet
    )

    const tokenizedAsset = await tokenizedAssetInterface.deploy(
      createAssetDto.name,
      createAssetDto.symbol,
      createAssetDto.beneficiary,
      createAssetDto.supply.toString()
    )

    return this.prismaService.asset.create({
      data: {
        ...createAssetDto,
        address: tokenizedAsset.address
      }
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
