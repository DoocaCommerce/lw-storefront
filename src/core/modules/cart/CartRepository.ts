import { client } from "../../services/GraphqlService"
import { CART_COMPLEX_FIELDS, CART_DEFAULT_FIELDS } from "./CartHelper"
import { AddItemReponse, Cart, CartFields, CleanCartReponse, DeleteItemReponse, GetCartResponse, OptionsAddItemCart, OptionsCleanCart, OptionsDeleteItemCart, OptionsGetCart, OptionsUpdateItemCart, UpdateItemReponse } from "./CartTypes"

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

    static async addItem(optionsAddCart: OptionsAddItemCart): Promise<Cart> {
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

    static async updateItem(optionsUpodateCart: OptionsUpdateItemCart): Promise<Cart> {
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

    static async deleteItem(optionsDeleteItemCart: OptionsDeleteItemCart): Promise<Cart> {
        const { fields, input } = optionsDeleteItemCart
        const cartFields: String = this.buildJoinedCartFields(fields)

        const deleteItemMutation = `
        mutation DeleteItem($cartToken: String!, $item: deleteItemTypeInput) {
            deleteItem(cartToken: $cartToken, item: $item) {
                ${cartFields}
            }   
        } 
        `
        
        const { deleteItem }: DeleteItemReponse = await client.mutation(deleteItemMutation, input && {...input})
        return deleteItem
    }

    static async cleanCart(optionsCleanCart: OptionsCleanCart): Promise<Cart> {
        const { fields, input } = optionsCleanCart
        const cartFields: String = this.buildJoinedCartFields(fields)

        const cleanCartMutation = `
        mutation CleanCart($cartToken: String!, $items: [deleteItemTypeInput]) {
            cleanCart(cartToken: $cartToken, items: $items) {
                ${cartFields}
            }   
        } 
        `
       
        const { cleanCart }:CleanCartReponse = await client.mutation(cleanCartMutation, input && {...input})

        return cleanCart
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
