import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const FIRST_ITEM_INDEX = 0
const SELECTED_FIELDS: Array<CartFields> = ['id', 'token', 'address', 'items']
const SINGLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [{ variation_id: 1394682, quantity: 1 }]

let firstAddedItemsCart

describe('Cart Module', () => {
  beforeAll(async () => {
    firstAddedItemsCart = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE })
  })

  it('Should update item and return cart with all fields successfully', async () => {
    const UPDATED_ITEM_QUANTITY = 3

    const updatedItemCart = await CartService.updateItem({
      item: {
        id: firstAddedItemsCart.items[FIRST_ITEM_INDEX].id,
        quantity: UPDATED_ITEM_QUANTITY
      },
      cartToken: firstAddedItemsCart.token
    })

    const cartItems = updatedItemCart.items

    expect(cartItems[FIRST_ITEM_INDEX].quantity).toEqual(UPDATED_ITEM_QUANTITY)
    expect(cartItems[FIRST_ITEM_INDEX].id).toEqual(firstAddedItemsCart.items[FIRST_ITEM_INDEX].id)
    expect(cartItems.length).toEqual(firstAddedItemsCart.items.length)
  })

  it('Should update item and return cart with selected fields successfully', async () => {
    const UPDATED_ITEM_QUANTITY = 2

    const updatedItemCartWithSelectedFields = await CartService.updateItem(
      {
        item: {
          id: firstAddedItemsCart.items[FIRST_ITEM_INDEX].id,
          quantity: UPDATED_ITEM_QUANTITY
        },
        cartToken: firstAddedItemsCart.token
      },
      [...SELECTED_FIELDS]
    )

    const cartResultFields = Object.keys(updatedItemCartWithSelectedFields).filter(key => key != '__typename')
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })
})