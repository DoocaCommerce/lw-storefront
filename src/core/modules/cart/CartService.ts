import { CartRepository } from "./CartRepository"
import { AddItemInput, CartFields } from "./CartTypes"

export class CartService {
    static async addItem(input: AddItemInput, fields?: Array<CartFields>) {
        const result = await CartRepository.addItem({fields: fields || null, input: input})
        return result
    }
}
