import { Image } from '../ImageTypes'
import { ProductImage } from './ProductImageTypes'
import { nullable } from '../NullableTypes'

export interface Color {
  id: number
  name: string
  slug: string
  url: string
  hexadecimal?: nullable<string>
  active?: nullable<boolean>
  external_id?: nullable<string>
  image?: nullable<Image>
  product_images?: nullable<ProductImage[]>
  position?: nullable<number>
}
