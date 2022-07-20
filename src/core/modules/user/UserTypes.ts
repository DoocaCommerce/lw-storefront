import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/NullableTypes'

export interface User {
  id?: nullable<String>
  email?: nullable<String>
  first_name?: nullable<String>
  last_name?: nullable<String>
  gender?: nullable<String>
  newsletter?: nullable<Boolean>
  marketplace?: nullable<Boolean>
  customer_group_id?: nullable<Number>
  external_id?: nullable<Number>
  entity?: nullable<String>
  company?: nullable<String>
  ie?: nullable<String>
  birthday?: nullable<String>
  phone?: nullable<String>
  token?: nullable<string>
  reset_token?: nullable<String>
  note?: nullable<String>
  facebook_id?: nullable<String>
  google_id?: nullable<String>
  active?: nullable<Boolean>
  created_at?: nullable<String>
  updated_at?: nullable<String>
  doc?: nullable<String>
  group?: nullable<UserGroup>
  address?: nullable<UserAddress>
  image?: nullable<Image>
}

export interface LoginRespose {
  login: User
}

export interface UserResponse {
  user: User
}

export interface UserGroup {
  id?: nullable<Number>
  name?: nullable<String>
}

export interface UserAddress {
  id?: nullable<Number>
  receiver?: nullable<String>
  zipcode?: nullable<String>
  street?: nullable<String>
  city?: nullable<String>
  state?: nullable<String>
  number?: nullable<Number>
  detail?: nullable<String>
}

export interface OptionsDoLogin {
  fields: nullable<Array<UserFields>>
  credentials: LoginCredentials
}

export interface OptionsGetUser {
  token: string
  fields: nullable<Array<UserFields>>
}

export interface LoginCredentials {
  doc?: String
  email?: String
  password: String
}

export type UserFields =
  | 'id'
  | 'email'
  | 'first_name'
  | 'last_name'
  | 'gender'
  | 'newsletter'
  | 'marketplace'
  | 'customer_group_id'
  | 'external_id'
  | 'entity'
  | 'company'
  | 'ie'
  | 'birthday'
  | 'phone'
  | 'token'
  | 'reset_token'
  | 'note'
  | 'facebook_id'
  | 'google_id'
  | 'active'
  | 'created_at'
  | 'updated_at'
  | 'doc'
  | 'group'
  | 'address'
  | 'image'

export type UserGroupFiels = 'id' | 'name'

export type UserAddressFields = 'id' | 'receiver' | 'zipcode' | 'street' | 'city' | 'state' | 'number' | 'detail'

export type UserImageFields = 'src' | 'alt'
