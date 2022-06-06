import { nullable } from "../../types/NullableTypes"

export interface Cart {
    id?: nullable<String>
    token?: nullable<String>
    customer?: nullable<CustomerCart>
    address?: nullable<CartAddress>
    coupon?: nullable<String>
    shipping_token?: nullable<String>
    payment_token?: nullable<String>
    creditcard?: nullable<CartCreditCard>
    items?: nullable<Array<CartItem>>
}

export interface CustomerCart {
    email?: nullable<String>
    doc?: nullable<String>
    newsletter?: nullable<Boolean>
    first_name?: nullable<String>
    last_name?: nullable<String>
    name?: nullable<String>
    phone?: nullable<String>
}

export interface CartAddress {
    receiver?: nullable<String>
    zipcode?: nullable<String>
    street?: nullable<String>
    Int?: nullable<String>
    detail?: nullable<String>
    district?: nullable<String>
    city?: nullable<String>
    state?: nullable<String>
}

export interface CartCreditCard {
    cvv?: nullable<String>
    exp?: nullable<String>
    name?: nullable<String>
    Int?: nullable<String>
}

export interface CartItem {
    id?: nullable<Number>
    variation_id?: nullable<Number>
    quantity?: nullable<Number>
    zipcode?: nullable<Number>
    customize?: nullable<CustomizationsItem>
    components?: nullable<ComponentItem> 
}

export interface CustomizationsItem {
    id?: nullable<Number>
    name?: nullable<String>
    content?: nullable<CustomizeContent> 
}

export interface CustomizeContent {
    id?: nullable<Number>
    field?: nullable<String>
    value?: nullable<String>
    price?: nullable<Number>
}

export interface ComponentItem {
    variation_id?: nullable<Number>
    component_id?: nullable<Number>
}

interface MutationInput {
    cartToken?: String
}

export interface AddItemInput extends MutationInput {
    items: Array<CartItemAddInput>
}

export interface UpdateItemInput extends MutationInput {
    item: CartItemUpdateInput
}

interface CartItemDeleteInput {
    id: nullable<Number>
}

export interface DeleteItemInput extends MutationInput {
    item: CartItemDeleteInput
}

export interface CleanCartInput extends MutationInput {
    items: Array<CartItemDeleteInput>
}

export interface CartItemAddInput {
    variation_id: nullable<Number>
    quantity: nullable<Number>
    cartToken?: nullable<String>
    zipcode?: nullable<Number>
    customize?: CustomizationsItemInput
    components?: ComponentItemInput
}

export interface CartItemUpdateInput {
    id: nullable<Number>
    quantity: nullable<Number>
    customize?: CustomizationsItemInput
}

export interface ComponentItemInput {
    variation_id?: nullable<Number>
    component_id?: nullable<Number>
}

export interface CustomizationsItemInput {
    id?: nullable<Number>
    name?: nullable<String>
    content: CustomizationContentInput
}

export interface CustomizationContentInput {
    id?: nullable<Number>
    field?: nullable<String>
    value?: nullable<String>
    price?: nullable<Number>
}

interface OptionsCartMutation<T> {
    fields: nullable<Array<CartFields>>
    input: T
}

export interface OptionsAddItemCart extends OptionsCartMutation<AddItemInput> {}

export interface OptionsUpdateItemCart extends OptionsCartMutation<UpdateItemInput> {}

export interface OptionsDeleteItemCart extends OptionsCartMutation<DeleteItemInput> {}

export interface OptionsCleanCart extends OptionsCartMutation<CleanCartInput> {}

export interface OptionsGetCart {
    fields: nullable<Array<CartFields>>
    filter: CartFilter
}

export interface CartFilter {
    cartToken: String
}

export interface AddItemReponse {
    addItem: Cart
}

export interface UpdateItemReponse {
    updateItem: Cart
}

export interface DeleteItemReponse {
    deleteItem: Cart
}

export interface CleanCartReponse {
    cleanCart: Cart
}

export interface GetCartResponse {
    cart: Cart
}

export type CartFields = 
| "id"
| "token"
| "customer"
| "address"
| "coupon"
| "shipping_token"
| "payment_token" 
| "creditcard"
| "items"

export type CartCreditCartFields =
| "cvv"
| "exp"
| "name"
| "Int"

export type CustomerCartField = 
| "email"
| "doc"
| "newsletter"
| "first_name"
| "last_name"
| "name"
| "phone"

export type AdressCartFields =
| "receiver"
| "zipcode" 
| "street"
| "Int"
| "detail"
| "district"
| "city"
| "state"

export type CartItemFields =
| "id"
| "variation_id"
| "quantity"
| "zipcode"
| "customize" 
| "components"

export type ComponentFields =
| "variation_id"
| "component_id"

export type CustomizeFields =
| "id"
| "name"
| "content"

export type ContentFields =
| "id" 
| "field"
| "value"
| "price"
