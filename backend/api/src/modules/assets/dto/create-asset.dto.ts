import { Prisma } from 'db'

export class CreateAssetDto
  implements Partial<Prisma.AssetCreateInput>
{
  name: string

  symbol: string

  supply: number

  beneficiary: string

  address?: string
}

// or if a field should not be accepted on the request body:
// export class CreateAssetDto
//   implements Omit<Prisma.AssetCreateInput, 'address'>
// {
//   name: string

//   symbol: string

//   supply: number

//   beneficiary: string
// }
