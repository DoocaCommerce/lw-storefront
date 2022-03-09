import { nullable } from '../NullableTypes'

export interface ComponentGroup {
  id: number
  shop_id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
  description?: nullable<string>
  optional?: nullable<boolean>
}
