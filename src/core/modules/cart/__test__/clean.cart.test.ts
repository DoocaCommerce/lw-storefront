import { CartService } from '../CartService'
import { AddItemInput, CartFields } from '../CartTypes'
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'
import { multipleItemsToBeAddedSample, refereceCartAllFieldsObject, refereceCartSelectedFieldsObject, selectedFields, singleItemToBeAddedSample } from './CartTestHelper'
import "isomorphic-fetch"

async function buildCleanCartAsserts(itemsToBeAdded: AddItemInput, fields?: Array<CartFields>) {
    const addedItemCart = await CartService.addItem(itemsToBeAdded)
    const addedItems = addedItemCart.items!

    const cleanCart = await CartService.cleanCart({
        items: [ ...addedItems.map(item => ({id: item.id})) ],
        cartToken: addedItemCart.token
    })

    const cartItems = cleanCart.items

    buildBaseAsserts(cartItems, fields ? refereceCartSelectedFieldsObject : refereceCartAllFieldsObject)
    expect(cartItems).toEqual(null)
}

describe('Cart Module', () => {
    it('Should add single item, clean and return cart with all fields successfully', async () => {
        const itemsToBeAdded = {items: singleItemToBeAddedSample}
        await buildCleanCartAsserts(itemsToBeAdded)
    })

    it('Should add single item, clean and return cart with selected fields successfully', async () => {
        const itemsToBeAdded = {items: singleItemToBeAddedSample}
        await buildCleanCartAsserts(itemsToBeAdded, selectedFields)
    })

    it('Should add multiple items, clean and return cart with all fields successfully', async () => {
        const itemsToBeAdded = {items: multipleItemsToBeAddedSample}
        await buildCleanCartAsserts(itemsToBeAdded)
    })

    it('Should add multiple items, clean and return cart with selected fields successfully', async () => {
        const itemsToBeAdded = {items: multipleItemsToBeAddedSample}
        await buildCleanCartAsserts(itemsToBeAdded, selectedFields)
    })
})
