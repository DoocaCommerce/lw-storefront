import { nullable } from '../NullableTypes'

export interface ProductImage {
  id: number
  product_id: number
  created_at: string
  updated_at: string
  src?: nullable<string>
  alt?: nullable<string>
  position?: nullable<number>
  color_ids?: nullable<number[]>
}
