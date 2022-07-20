import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<CartFields> = ['id', 'token']

const SINGLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [{ variation_id: 9467694, quantity: 1 }]
const MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [
  ...SINGLE_ITEM_TO_BE_ADDED_SAMPLE,
  { variation_id: 9467696, quantity: 1 }
]

describe('Cart Module', () => {
  it('Should add item and return cart with all fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE })
    const cartItems = cartResult.items
    cartItems.forEach((cartItem, index) => {
      expect(cartItem.variation_id).toEqual(cartResult.items[index].variation_id)
      expect(cartItem.quantity).toEqual(cartResult.items[index].quantity)
    })
  })

  it('Should add item and return cart with selected fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE }, [...SELECTED_FIELDS])
    const cartResultFields = Object.keys(cartResult).filter(key => key != '__typename')
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should add multiple items and return cart with all fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE })
    expect(cartResult.items.length).toEqual(MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE.length)
  })

  it('Should try to add item with invalid variation_id and it should throw error', async () => {
    expect(async () => await CartService.addItem({ items: [{ variation_id: 999, quantity: 1 }] })).rejects.toThrow
  })
})
