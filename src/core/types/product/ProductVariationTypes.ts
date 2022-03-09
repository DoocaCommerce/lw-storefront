import { Color } from './ColorTypes'
import { AttributeValue } from './AttributeTypes'
import { ProductImage } from './ProductImageTypes'
import { nullable } from '../NullableTypes'

export interface ProductVariation {
  id: number
  product_id: number
  price: number
  created_at: string
  updated_at: string
  grid_id?: nullable<number>
  color_id?: nullable<number>
  color_secondary_id?: nullable<number>
  attribute_value_id?: nullable<number>
  attribute_value_secondary_id?: nullable<number>
  external_id?: nullable<string>
  reference?: nullable<string>
  slug?: nullable<string>
  price_compare?: nullable<number>
  sku?: nullable<string>
  gtin?: nullable<string>
  mpn?: nullable<string>
  additional_shipping_time?: nullable<number>
  images?: nullable<ProductImage[]>
  position?: nullable<number>
  active?: nullable<boolean>
  balance?: nullable<number>
  selling_out_of_stock?: nullable<boolean>
  color?: nullable<Color>
  attribute?: nullable<AttributeValue>
  attribute_secondary?: nullable<AttributeValue>
}
