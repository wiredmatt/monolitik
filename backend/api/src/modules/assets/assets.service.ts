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
    let address: string | undefined

    if (!createAssetDto.address) {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.BLOCKCHAIN_NODE
      )

      const wallet = new ethers.Wallet(
        process.env.BLOCKCHAIN_PRIVATE_KEY,
        provider
      )

      const tokenizedAssetInterface =
        new TokenizedAsset__factory(wallet)

      const tokenizedAsset =
        await tokenizedAssetInterface.deploy(
          createAssetDto.name,
          createAssetDto.symbol,
          createAssetDto.beneficiary,
          createAssetDto.supply.toString()
        )

      address = tokenizedAsset.address
    } else {
      // TODO: Check if address is valid
      // TODO: Check if address is not already in use
      // TODO: Check if address corresponds to a contract
      // with the correct ABI
      // TODO: Check if contract address was deployed by the
      // user sending this request
      address = createAssetDto.address
    }

    return this.prismaService.asset.create({
      data: {
        ...createAssetDto,
        address
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
