import { client } from '../../services/GraphqlService'
import { ShopQueries } from './ShopQueries'
import { Shop, ShopFields, ShopResponse } from './ShopTypes'

export class ShopRepositoryGql {
  static async getShop(fields?: Array<ShopFields>): Promise<Shop> {
    const shopQuery = new ShopQueries(fields)
    const getShopQuery: string = shopQuery.getShop()

    try {
      const { shop }: ShopResponse = await client.query(getShopQuery)

      return shop
    } catch (error) {
      throw new Error(error)
    }
  }
}
