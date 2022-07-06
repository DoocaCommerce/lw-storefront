import { client } from '../../services/GraphqlService'
import { CartQueries } from './CartQueries'
import {
  AddItemResponse,
  Cart,
  CleanCartResponse,
  DeleteItemResponse,
  GetCartResponse,
  OptionsAddItemCart,
  OptionsCleanCart,
  OptionsDeleteItemCart,
  OptionsGetCart,
  OptionsUpdateItemCart,
  UpdateItemResponse
} from './CartTypes'

export class CartRepositoryGql {
  static async addItem({ fields, input }: OptionsAddItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const addItemQuery: string = cartQuery.addItemQuery()
    try {
      const { addItem }: AddItemResponse = await client.mutation(addItemQuery, input && { ...input })

      return addItem
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updateItem({ fields, input }: OptionsUpdateItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const updateItemQuery: string = cartQuery.updateItemQuery()
    try {
      const { updateItem }: UpdateItemResponse = await client.mutation(updateItemQuery, input && { ...input })

      return updateItem
    } catch (error) {
      throw new Error(error)
    }
  }

  static async deleteItem({ fields, input }: OptionsDeleteItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const deleteItemQuery: string = cartQuery.deleteItemQuery()
    try {
      const { deleteItem }: DeleteItemResponse = await client.mutation(deleteItemQuery, input && { ...input })

      return deleteItem
    } catch (error) {
      throw new Error(error)
    }
  }

  static async cleanCart({ fields, input }: OptionsCleanCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const cleanCartQuery: string = cartQuery.cleanCartQuery()
    try {
      const { cleanCart }: CleanCartResponse = await client.mutation(cleanCartQuery, input && { ...input })

      return cleanCart
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getCart({ fields, filter }: OptionsGetCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const getCartQuery: string = cartQuery.getCartQuery()
    try {
      const { cart }: GetCartResponse = await client.query(getCartQuery, filter && { ...filter })

      return cart
    } catch (error) {
      throw new Error(error)
    }
  }
}
