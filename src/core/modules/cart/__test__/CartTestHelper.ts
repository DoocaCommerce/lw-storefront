import { Cart, CartFields } from '../CartTypes'

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
