import { CartService } from '../CartService'
import { Cart, CartFields, CartItemAddInput, CartItemUpdateInput } from '../CartTypes'
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'
import "isomorphic-fetch"

const selectedFields: Array<CartFields> = ['id', 'token', 'address', 'items']

const refereceCartAllFieldsObject: Cart = {
    id: '',
    token: '',
    customer: {},
    address: {},
    coupon: '',
    shipping_token: '',
    payment_token: '',
    creditcard: {},
    items: []
}

const refereceCartSelectedFieldsObject: Cart = {
    id: '',
    token: '',
    customer: {},
    address: {},
    coupon: '',
    shipping_token: '',
    payment_token: '',
    creditcard: {},
    items: []
}

const singleItemToBeAddedSample: Array<CartItemAddInput> = [{"variation_id": 1394682, "quantity": 1}]

async function buildUpdateCartAsserts(fields?: Array<CartFields>) {
    const UPDATED_ITEM_QUANTITY = 3
    const FIRST_ITEM_INDEX = 0

    const addedItemCart = await CartService.addItem({items: singleItemToBeAddedSample})

    const updatedItemCart = await CartService.updateItem({
        item: {
            id: addedItemCart.items[FIRST_ITEM_INDEX].id,
            quantity: UPDATED_ITEM_QUANTITY
        },
        cartToken: addedItemCart.token
    })

    const cartItems = updatedItemCart.items

    buildBaseAsserts(updatedItemCart, fields ? refereceCartSelectedFieldsObject : refereceCartAllFieldsObject)
    
    cartItems.forEach((cartItem, index) => {
        expect(cartItem.variation_id).toEqual(updatedItemCart.items[index].variation_id)
        expect(cartItem.quantity).toEqual(updatedItemCart.items[index].quantity)
    })

    expect(updatedItemCart.items[FIRST_ITEM_INDEX].quantity).toEqual(UPDATED_ITEM_QUANTITY)
    expect(updatedItemCart.items[FIRST_ITEM_INDEX].variation_id).toEqual(addedItemCart.items[FIRST_ITEM_INDEX].variation_id)
    expect(updatedItemCart.token).toEqual(addedItemCart.token)
    expect(cartItems.length).toEqual(addedItemCart.items.length)
}

describe('Cart Module', () => {
    it('Should update item and return cart with all fields successfully', async () => {
        await buildUpdateCartAsserts()
    })

    it('Should update item and return cart with selected fields successfully', async () => {
        await buildUpdateCartAsserts(selectedFields)
    })
})
