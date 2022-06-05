import { client } from "../../services/GraphqlService"
import { CART_DEFAULT_FIELDS, replaceComplextCartItems } from "./CartHelper"
import { AddItemReponse, Cart, CartFields, OptionsAddCart, OptionsUpdateCart, UpdateItemReponse } from "./CartTypes"

export class CartRepository {

    private static buildJoinedCartFields(fields?: Array<CartFields>): String {
        return (fields ? replaceComplextCartItems(fields) : CART_DEFAULT_FIELDS).join()
    }

    static async addItem(optionsAddCart: OptionsAddCart): Promise<Cart> {
        const { fields, input } = optionsAddCart
        const cartFields: String = this.buildJoinedCartFields(fields)

        const addItemMutation = `
        mutation Mutation($cartToken: String, $items: [CartItemAddInput]) {
            addItem(cartToken: $cartToken, items: $items) {
                ${cartFields}
            }   
        } 
        ` 

        const { addItem }:AddItemReponse = await client.mutation(addItemMutation, input && {...input})
        return addItem
    }

    static async updateItem(optionsUpodateCart: OptionsUpdateCart): Promise<Cart> {
        const { fields, input } = optionsUpodateCart
        const cartFields: String = this.buildJoinedCartFields(fields)

        const updateItemMutation = `
        mutation Mutation($cartToken: String!, $item: updateItemTypeInput) {
            updateItem(cartToken: $cartToken, item: $item) {
                ${cartFields}
            }   
        } 
        `

        const teste: any = await client.mutation(updateItemMutation, input && {...input})

        return teste.updateItem
    }
}
