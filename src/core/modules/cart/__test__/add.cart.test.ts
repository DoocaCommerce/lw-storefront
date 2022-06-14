import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
<<<<<<< HEAD
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
=======
import "isomorphic-fetch"

const SELECTED_FIELDS: Array<CartFields> = ['id', 'token', 'address', 'items']

const SINGLE_ITEM_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [{"variation_id": 75053, "quantity": 1}]
const MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE: Array<CartItemAddInput> = [...SINGLE_ITEM_TO_BE_ADDED_SAMPLE, {"variation_id": 1394682, "quantity": 1}]
>>>>>>> origin/feat/modulo-cart

describe('Cart Module', () => {
    it('Should add item and return cart with all fields successfully', async () => {
        const cartResult = await CartService.addItem({items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE})
        const cartItems = cartResult.items
        cartItems.forEach((cartItem, index) => {
            expect(cartItem.variation_id).toEqual(cartResult.items[index].variation_id)
            expect(cartItem.quantity).toEqual(cartResult.items[index].quantity)
        })
    })

    it('Should add item and return cart with selected fields successfully', async () => {
        const cartResult = await CartService.addItem({items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE}, [...SELECTED_FIELDS])
        const cartResultFields = Object.keys(cartResult).filter(key => key != '__typename')
        expect(cartResultFields).toEqual(SELECTED_FIELDS)
        expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
    })

    it('Should add multiple items and return cart with all fields successfully', async () => {
        const cartResult = await CartService.addItem({items: MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE})
        expect(cartResult.items.length).toEqual(MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE.length)  
    })
})