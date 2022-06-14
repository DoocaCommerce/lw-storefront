import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'
import { refereceCartAllFieldsObject, refereceCartSelectedFieldsObject, selectedFields } from './CartTestHelper'
import "isomorphic-fetch"

const singleItemToBeAddedSample: Array<CartItemAddInput> = [{"variation_id": 1394682, "quantity": 1}]

async function buildGetCartAsserts(fields?: Array<CartFields>) {
    const FIRST_ITEM_INDEX = 0

    const addedItemCart = await CartService.addItem({items: singleItemToBeAddedSample})

    const cartResult = await CartService.getCart(addedItemCart.token, fields)

    const cartItems = cartResult.items

    buildBaseAsserts(cartResult, fields ? refereceCartSelectedFieldsObject : refereceCartAllFieldsObject)
    
    cartItems.forEach((cartItem, index) => {
        expect(cartItem.variation_id).toEqual(cartResult.items[index].variation_id)
        expect(cartItem.quantity).toEqual(cartResult.items[index].quantity)
    })

    expect(cartResult.items[FIRST_ITEM_INDEX].quantity).toEqual(addedItemCart.items[FIRST_ITEM_INDEX].quantity)
    expect(cartResult.items[FIRST_ITEM_INDEX].variation_id).toEqual(addedItemCart.items[FIRST_ITEM_INDEX].variation_id)
    expect(cartResult.token).toEqual(addedItemCart.token)
    expect(cartItems.length).toEqual(addedItemCart.items.length)
}

describe('Cart Module', () => {
    it('Should get cart with all fields successfully', async () => {
        await buildGetCartAsserts()
    })

    it('Should get cart with selected fields successfully', async () => {
        await buildGetCartAsserts(selectedFields)
    })
})
