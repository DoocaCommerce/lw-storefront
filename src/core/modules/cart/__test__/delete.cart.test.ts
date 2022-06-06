import { CartService } from '../CartService'
import { AddItemInput, CartFields } from '../CartTypes'
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'
import { multipleItemsToBeAddedSample, refereceCartAllFieldsObject, refereceCartSelectedFieldsObject, selectedFields, singleItemToBeAddedSample } from './CartTestHelper'
import "isomorphic-fetch"

async function buildDeleteCartAsserts(itemsToBeAdded: AddItemInput, fields?: Array<CartFields>) {
    const FIRST_ITEM_INDEX = 0

    const addedItemCart = await CartService.addItem(itemsToBeAdded)

    const deletedItemCart = await CartService.deleteItem({
        item: {
            id: addedItemCart.items[FIRST_ITEM_INDEX].id,
        },
        cartToken: addedItemCart.token
    })

    const cartItems = deletedItemCart.items

    buildBaseAsserts(deletedItemCart, fields ? refereceCartSelectedFieldsObject : refereceCartAllFieldsObject)
    
    cartItems && expect(cartItems.length).toEqual(addedItemCart.items.length - 1)
    !cartItems && expect(cartItems).toEqual(null)
}

describe('Cart Module', () => {
    it('Should add single item, delete the item and return cart with all fields successfully', async () => {
        const itemsToBeAdded = {items: singleItemToBeAddedSample}
        await buildDeleteCartAsserts(itemsToBeAdded)
    })

    it('Should add single item, delete the remove item and return cart with selected fields successfully', async () => {
        const itemsToBeAdded = {items: singleItemToBeAddedSample}
        await buildDeleteCartAsserts(itemsToBeAdded, selectedFields)
    })

    it('Should add multiple items, delete the item and return cart with all fields successfully', async () => {
        const itemsToBeAdded = {items: multipleItemsToBeAddedSample}
        await buildDeleteCartAsserts(itemsToBeAdded)
    })

    it('Should add multiple items, delete the remove item and return cart with selected fields successfully', async () => {
        const itemsToBeAdded = {items: multipleItemsToBeAddedSample}
        await buildDeleteCartAsserts(itemsToBeAdded, selectedFields)
    })
})
