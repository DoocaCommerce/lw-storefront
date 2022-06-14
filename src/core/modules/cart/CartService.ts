import { CartRepository } from "./CartRepository"
import { AddItemInput, CartFields, UpdateItemInput } from "./CartTypes"

export class CartService {
    static async addItem(input: AddItemInput, fields?: Array<CartFields>) {
        const result = await CartRepository.addItem({fields: fields || null, input: input})
        return result
    }

    static async updateItem(input: UpdateItemInput, fields?: Array<CartFields>) {
        const result = await CartRepository.updateItem({fields: fields || null, input: input})
        return result
    }
}