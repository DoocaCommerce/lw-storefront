import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const FIRST_ITEM_INDEX = 0
const SECOND_ITEM_INDEX = 1
const SELECTED_FIELDS: Array<CartFields> = ['id', 'token', 'address', 'items']
const MULTIPLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [
  { variation_id: 1394682, quantity: 1 },
  { variation_id: 75053, quantity: 1 }
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
    expect(deleteItemCartWithSelectedFields.items).toBeNull()
  })
})
