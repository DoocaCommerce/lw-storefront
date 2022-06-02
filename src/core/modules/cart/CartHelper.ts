const CUSTOMER_CART_DEFAULT_FIELDS = [
    "email",
    "doc",
    "newsletter",
    "first_name",
    "last_name",
    "name",
    "phone"
]

const CART_CREDIT_CARD_DEFAULT_FIELDS = [
    "cvv",
    "exp",
    "name",
    "Int"
]

const ADRESS_CART_FIELDS_DEFAULT = [
    "receiver",
    "zipcode",
    "street",
    "Int",
    "detail",
    "district",
    "city",
    "state"
]

const COMPONENTS_DEFAULT_FIELDS = [
    "variation_id",
    "component_id"
]

const CONTENT_DEFAULT_FIELDS = [
    "id",
    "field",
    "value",
    "price"
]

const CUSTOMIZE_DEFAULT_FIELDS = [
    "id",
    "name",
    `content {${CONTENT_DEFAULT_FIELDS.join()}}`
]

const CART_ITEM_DEFAULT_FIELD = [
    "id",
    "variation_id",
    "quantity",
    "zipcode",
    `customize {${CUSTOMIZE_DEFAULT_FIELDS.join()}}`,
    `components {${COMPONENTS_DEFAULT_FIELDS.join()}}`
]

const cartComplexFields = {
    customer: `customer {${CUSTOMER_CART_DEFAULT_FIELDS.join()}}`,
    address: `address {${ADRESS_CART_FIELDS_DEFAULT.join()}}`,
    creditcard: `creditcard {${CART_CREDIT_CARD_DEFAULT_FIELDS.join()}}`,
    items: `items {${CART_ITEM_DEFAULT_FIELD.join()}}`
}

export const CART_DEFAULT_FIELDS = [
    "id",
    "token",
    cartComplexFields.customer,
    cartComplexFields.address,
    "coupon",
    "shipping_token",
    "payment_token",
    cartComplexFields.creditcard,
    cartComplexFields.items
]


export function replaceComplextCartItems(fields: Array<String>): Array<String> {
    Object.keys(cartComplexFields).forEach(complexFieldItemKey => {
        const indexOfField = fields.indexOf(complexFieldItemKey)
        const isFieldSelected = indexOfField != -1 
        isFieldSelected && (fields[indexOfField] = cartComplexFields[complexFieldItemKey])
    })

    return fields
}