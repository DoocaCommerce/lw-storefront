import { Cart, CartFields, CartItemAddInput } from '../CartTypes'

export const selectedFields: Array<CartFields> = ['id', 'token', 'address', 'items']

export const refereceCartAllFieldsObject: Cart = {
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

export const refereceCartSelectedFieldsObject: Cart = {
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

export const singleItemToBeAddedSample: Array<CartItemAddInput> = [{"variation_id": 1394682, "quantity": 1}]
export const multipleItemsToBeAddedSample: Array<CartItemAddInput> = [...singleItemToBeAddedSample, {"variation_id": 75053, "quantity": 1}]
