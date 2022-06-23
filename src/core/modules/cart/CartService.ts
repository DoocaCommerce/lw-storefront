import { CartRepository } from './CartRepository'
import { AddItemInput, CartFields, DeleteItemInput, UpdateItemInput } from './CartTypes'

export class CartService {
  static async addItem(input: AddItemInput, fields?: Array<CartFields>) {
    const result = await CartRepository.addItem({ fields: fields || null, input: input })
    return result
  }

  static async updateItem(input: UpdateItemInput, fields?: Array<CartFields>) {
    const result = await CartRepository.updateItem({ fields: fields || null, input: input })
    return result
  }

  static async deleteItem(input: DeleteItemInput, fields?: Array<CartFields>) {
    const result = await CartRepository.deleteItem({ fields: fields || null, input: input })
    return result
  }

  static async getCart(cartToken: String, fields?: Array<CartFields>) {
    const result = await CartRepository.getCart({ fields: fields || null, filter: { cartToken: cartToken } })
    return result
  }
}
