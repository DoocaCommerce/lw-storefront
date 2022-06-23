import { CartService } from '../CartService'
import { AddItemInput, CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<CartFields> = ['id', 'token', 'address', 'items']
const SINGLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [{ variation_id: 1394682, quantity: 1 }]

let firstAddedItemsCart

describe('Cart Module', () => {
  beforeEach(async () => {
    firstAddedItemsCart = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE })
    console.log(firstAddedItemsCart.token)
  })

  it('Should add single item, clean and return cart with all fields successfully', async () => {
    const cleanCart = await CartService.cleanCart({
      items: [...firstAddedItemsCart.map(item => ({ id: item.id }))],
      cartToken: firstAddedItemsCart.token
    })
    Object.keys(cleanCart)
      .filter(key => key != '__typename')
      .forEach(key => expect(cleanCart[key]).toBeNull())
  })

  it('Should add single item, clean and return cart with selected fields successfully', async () => {
    const cleanCart = await CartService.cleanCart(
      {
        items: [...firstAddedItemsCart.map(item => ({ id: item.id }))],
        cartToken: firstAddedItemsCart.token
      },
      [...SELECTED_FIELDS]
    )

    const cartResultFields = Object.keys(cleanCart).filter(key => key != '__typename')
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })
})
