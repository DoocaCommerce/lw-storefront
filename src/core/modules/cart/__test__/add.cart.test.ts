import { CartService } from '../CartService'
import { Cart, CartFields, CartItemAddInput } from '../CartTypes'
import "isomorphic-fetch"
import { buildBaseAsserts } from '../../../helpers/__test__/testHelper'

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
const multipleItemsToBeAddedSample: Array<CartItemAddInput> = [...singleItemToBeAddedSample, {"variation_id": 75053, "quantity": 1}]

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
