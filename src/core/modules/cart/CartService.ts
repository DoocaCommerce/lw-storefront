import { CartRepositoryGql } from './CartRepositoryGql'
import { CartRepositoryJson } from './CartRepositoryJson'
import { AddItemInput, CartFields, CleanCartInput, DeleteItemInput, UpdateItemInput } from './CartTypes'

const Repository = dc_config.mock?.cart ? CartRepositoryJson : CartRepositoryGql

export class CartService {
  static async addItem(input: AddItemInput, fields?: Array<CartFields>) {
    const result = await Repository.addItem({ fields: fields || null, input: input })
    return result
  }

  static async updateItem(input: UpdateItemInput, fields?: Array<CartFields>) {
    const result = await Repository.updateItem({ fields: fields || null, input: input })
    return result
  }

  static async deleteItem(input: DeleteItemInput, fields?: Array<CartFields>) {
    const result = await Repository.deleteItem({ fields: fields || null, input: input })
    return result
  }

  static async getCart(cartToken: String, fields?: Array<CartFields>) {
    const result = await Repository.getCart({ fields: fields || null, filter: { cartToken: cartToken } })
    return result
  }
}
