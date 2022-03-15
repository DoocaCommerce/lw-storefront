import { nullable } from '../NullableTypes'

export interface Attribute {
  id: number
  name: string
  slug: string
  values: nullable<AttributeValue[]>
  active?: nullable<boolean>
  external_id?: nullable<string>
}

export interface AttributeValue {
  id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
  attribute_id?: nullable<number>
  external_id?: nullable<string>
  position?: nullable<number>
  active?: nullable<boolean>
}
