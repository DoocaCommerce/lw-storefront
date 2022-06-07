import { client } from "../../services/GraphqlService"
import { CART_COMPLEX_FIELDS, CART_DEFAULT_FIELDS } from "./CartHelper"
import { AddItemReponse, Cart, CartFields, OptionsAddCart, OptionsUpdateCart, UpdateItemReponse } from "./CartTypes"

export class CartRepository {

    private static replaceComplextCartItems(fields: Array<String>): Array<String> {
        Object.keys(CART_COMPLEX_FIELDS).forEach(complexFieldItemKey => {
            const indexOfField = fields.indexOf(complexFieldItemKey)
            const isFieldSelected = indexOfField != -1 
            isFieldSelected && (fields[indexOfField] = CART_COMPLEX_FIELDS[complexFieldItemKey])
        })
    
        return fields
    }
    

    private static buildJoinedCartFields(fields?: Array<CartFields>): String {
        return (fields ? this.replaceComplextCartItems(fields) : CART_DEFAULT_FIELDS).join()
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
}
