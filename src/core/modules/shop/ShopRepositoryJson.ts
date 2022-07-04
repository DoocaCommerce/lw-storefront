import { ShopFields } from './ShopTypes'

export class ShopRepositoryJson {
  static async getShop(fields?: Array<ShopFields>) {
    const result = dc_config.mock?.shop

    return result || {}
  }
}
