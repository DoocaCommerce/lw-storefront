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
    `customize {${CUSTOMIZE_DEFAULT_FIELDS.join()}}`,
    `components {${COMPONENTS_DEFAULT_FIELDS.join()}}`
]

export const CART_COMPLEX_FIELDS = {
    customer: `customer {${CUSTOMER_CART_DEFAULT_FIELDS.join()}}`,
    address: `address {${ADRESS_CART_FIELDS_DEFAULT.join()}}`,
    creditcard: `creditcard {${CART_CREDIT_CARD_DEFAULT_FIELDS.join()}}`,
    items: `items {${CART_ITEM_DEFAULT_FIELD.join()}}`
}

export const CART_DEFAULT_FIELDS = [
    "id",
    "token",
    CART_COMPLEX_FIELDS.customer,
    CART_COMPLEX_FIELDS.address,
    "coupon",
    "shipping_token",
    "payment_token",
    CART_COMPLEX_FIELDS.creditcard,
    CART_COMPLEX_FIELDS.items
]
