import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/NullableTypes'

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
  id
  name?: nullable<String>
  variation?: nullable<String>
  is_virtual?: nullable<Boolean>
  quantity?: nullable<Number>
  allowed_gift_wrapping?: nullable<Boolean>
  total_cost?: nullable<Number>
  total?: nullable<Number>
  price?: nullable<Number>
  price_cost?: nullable<Number>
  stock_balance?: nullable<Number>
  can_sell_out_of_stock?: nullable<Boolean>
  variation_id?: nullable<Number>
  additional_price?: nullable<Number>
  price_gift_wrapping?: nullable<Number>
  allowed_gift_wrapping_price?: nullable<Number>
  discount?: nullable<Number>
  price_compare?: nullable<Number>
  image?: nullable<Image>
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

export interface CartItemDeleteInput {
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
  cart_token: String
}

export interface AddItemResponse {
  addItem: Cart
}

export interface UpdateItemResponse {
  updateItem: Cart
}

export interface DeleteItemResponse {
  deleteItem: Cart
}

export interface CleanCartResponse {
  cleanCart: Cart
}

export interface GetCartResponse {
  cart: Cart
}

export type CartFields =
  | 'id'
  | 'token'
  | 'customer'
  | 'address'
  | 'coupon'
  | 'shipping_token'
  | 'payment_token'
  | 'creditcard'
  | 'items'

export type CartCreditCartFields = 'cvv' | 'exp' | 'name' | 'Int'

export type CustomerCartField = 'email' | 'doc' | 'newsletter' | 'first_name' | 'last_name' | 'name' | 'phone'

export type AdressCartFields = 'receiver' | 'zipcode' | 'street' | 'Int' | 'detail' | 'district' | 'city' | 'state'

export type CartItemFields =
  | 'id'
  | 'name'
  | 'variation'
  | 'is_virtual'
  | 'quantity'
  | 'allowed_gift_wrapping'
  | 'total_cost'
  | 'total'
  | 'price'
  | 'price_cost'
  | 'stock_balance'
  | 'can_sell_out_of_stock'
  | 'variation_id'
  | 'additional_price'
  | 'price_gift_wrapping'
  | 'allowed_gift_wrapping_price'
  | 'discount'
  | 'price_compare'
  | 'image'
  | 'customize'
  | 'components'

export type ComponentFields = 'variation_id' | 'component_id'

export type CustomizeFields = 'id' | 'name' | 'content'

export type ContentFields = 'id' | 'field' | 'value' | 'price'
