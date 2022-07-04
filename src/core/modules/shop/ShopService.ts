import { ShopRepositoryGql } from './ShopRepositoryGql'
import { ShopRepositoryJson } from './ShopRepositoryJson'
import { Shop, ShopFields } from './ShopTypes'

const Repository = dc_config.mock?.shop ? ShopRepositoryJson : ShopRepositoryGql

export class ShopService {
  static async getShop(fields?: Array<ShopFields>): Promise<Shop> {
    const result: Shop = await Repository.getShop(fields)
    return result
  }
}
