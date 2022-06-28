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

  it('Should get cart with all fields successfully', async () => {
    const cartResult = await CartService.getCart(firstAddedItemsCart.token)

    const cartItems = cartResult.items

    expect(cartResult.items[FIRST_ITEM_INDEX].quantity).toEqual(firstAddedItemsCart.items[FIRST_ITEM_INDEX].quantity)
    expect(cartResult.items[FIRST_ITEM_INDEX].variation_id).toEqual(
      firstAddedItemsCart.items[FIRST_ITEM_INDEX].variation_id
    )
    expect(cartResult.token).toEqual(firstAddedItemsCart.token)
    expect(cartItems.length).toEqual(firstAddedItemsCart.items.length)
  })

  it('Should get cart with selected fields successfully', async () => {
    const cartResult = await CartService.getCart(firstAddedItemsCart.token, [...SELECTED_FIELDS])

    const cartResultFields = Object.keys(cartResult).filter(key => key != '__typename')
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })
})