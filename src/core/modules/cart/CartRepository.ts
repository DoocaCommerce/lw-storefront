import { client } from "../../services/GraphqlService"
import { CART_DEFAULT_FIELDS, replaceComplextCartItems } from "./CartHelper"
import { AddItemReponse, Cart, CartFields, OptionsAddCart } from "./CartTypes"

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
}
