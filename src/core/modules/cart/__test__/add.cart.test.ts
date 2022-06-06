import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'
import { multipleItemsToBeAddedSample, refereceCartAllFieldsObject, refereceCartSelectedFieldsObject, selectedFields, singleItemToBeAddedSample } from './CartTestHelper'
import "isomorphic-fetch"

async function buildAddCartAsserts(itemsToBeAdded: Array<CartItemAddInput>, fields?: Array<CartFields>) {
    const updatedCartResult = await CartService.addItem({items: itemsToBeAdded}, fields)
    const cartItems = updatedCartResult.items

    buildBaseAsserts(updatedCartResult, fields ? refereceCartSelectedFieldsObject : refereceCartAllFieldsObject)
    cartItems.forEach((cartItem, index) => {
        expect(cartItem.variation_id).toEqual(updatedCartResult.items[index].variation_id)
        expect(cartItem.quantity).toEqual(updatedCartResult.items[index].quantity)
    })
    expect(itemsToBeAdded.length).toEqual(updatedCartResult.items.length)
}

describe('Cart Module', () => {
    it('Should add single item to the cart with all fields successfully', async () => {
        await buildAddCartAsserts(singleItemToBeAddedSample)
    })

    it('Should add single item to the cart with selected fields successfully', async () => {
        await buildAddCartAsserts(singleItemToBeAddedSample, selectedFields)
    })

    it('Should add multiple items to the cart with all fields successfully', async () => {
        await buildAddCartAsserts(multipleItemsToBeAddedSample)
    })

    it('Should add multiple items to the cart with selected fields successfully', async () => {
        await buildAddCartAsserts(multipleItemsToBeAddedSample, selectedFields)
    })
})
