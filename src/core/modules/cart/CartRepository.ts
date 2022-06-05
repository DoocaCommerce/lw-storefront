import { client } from "../../services/GraphqlService"
import { CART_DEFAULT_FIELDS, replaceComplextCartItems } from "./CartHelper"
import { AddItemReponse, Cart, CartFields, GetCartResponse, OptionsAddCart, OptionsGetCart, OptionsUpdateCart, UpdateItemReponse } from "./CartTypes"

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

        const { updateItem }:UpdateItemReponse = await client.mutation(updateItemMutation, input && {...input})
        return updateItem
    }

    static async getCart(optionsGetCart: OptionsGetCart): Promise<Cart> {
        const { fields, filter } = optionsGetCart
        const cartFields: String = this.buildJoinedCartFields(fields)

        const getCartQuery = `
        query Query($cartToken: String) {
            cart(cartToken: $cartToken) {
                ${cartFields}
            }   
        } 
        `

        const { cart }:GetCartResponse = await client.query(getCartQuery, filter && {...filter})

        return cart
    }
}
