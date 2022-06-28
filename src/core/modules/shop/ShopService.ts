import { ShopRepository } from './ShopRepository'
import { Shop, ShopFields } from './ShopTypes'

export class ShopService {
  static async getShop(fields?: Array<ShopFields>): Promise<Shop> {
    const result: Shop = await ShopRepository.getShop(fields)
    return result
  }
}
