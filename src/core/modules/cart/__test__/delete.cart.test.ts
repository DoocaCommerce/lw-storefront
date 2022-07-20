import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const FIRST_ITEM_INDEX = 0
const SECOND_ITEM_INDEX = 1
const SELECTED_FIELDS: Array<CartFields> = ['id', 'token']
const MULTIPLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [
  { variation_id: 9467694, quantity: 1 },
  { variation_id: 9467663, quantity: 1 }
]

let firstAddedItemsCart

describe('Cart Module', () => {
  beforeAll(async () => {
    firstAddedItemsCart = await CartService.addItem({ items: MULTIPLE_ITEM_TO_BE_ADDED_SAMPLE })
  })

  it('Should delete item and return cart with all fields successfully', async () => {
    const deleteItemCart = await CartService.deleteItem({
      item: {
        id: firstAddedItemsCart.items[FIRST_ITEM_INDEX].id
      },
      cartToken: firstAddedItemsCart.token
    })

    const cartItems = deleteItemCart.items

    expect(cartItems[FIRST_ITEM_INDEX].id).toEqual(firstAddedItemsCart.items[SECOND_ITEM_INDEX].id)
    expect(cartItems.length).toEqual(firstAddedItemsCart.items.length - 1)
  })

  it('Should delete item and return cart with selected fields successfully', async () => {
    const deleteItemCartWithSelectedFields = await CartService.deleteItem(
      {
        item: {
          id: firstAddedItemsCart.items[SECOND_ITEM_INDEX].id
        },
        cartToken: firstAddedItemsCart.token
      },
      [...SELECTED_FIELDS]
    )

    const cartResultFields = Object.keys(deleteItemCartWithSelectedFields).filter(key => key != '__typename')
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should try to delete item with invalid cart token and it should throw error', async () => {
    const INVALID_TOKEN = 'invalid_token'
    expect(
      async () =>
        await CartService.deleteItem({
          item: {
            id: firstAddedItemsCart.items[SECOND_ITEM_INDEX].id
          },
          cartToken: INVALID_TOKEN
        })
    ).rejects.toThrow()
  })

  it('Should try to delete item with invalid item id it should throw error', async () => {
    expect(
      async () =>
        await CartService.deleteItem({
          item: {
            id: 999
          },
          cartToken: firstAddedItemsCart.token
        })
    ).rejects.toThrow()
  })
})
