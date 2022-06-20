import { Prisma } from 'db'

export class CreateAssetDto
  implements Omit<Prisma.AssetCreateInput, 'address'>
{
  name: string

  symbol: string

  supply: number

  beneficiary: string
}
