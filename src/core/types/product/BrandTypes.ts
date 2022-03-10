import { Image } from '../ImageTypes'
import { nullable } from '../NullableTypes'

export interface Brand {
  id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
  url: string
  external_id?: nullable<string>
  hotsite_id?: nullable<number>
  description?: nullable<string>
  short_description?: nullable<string>
  image?: nullable<Image>
  banner?: nullable<Image>
  meta_title?: nullable<string>
  meta_keywords?: nullable<string>
  meta_description?: nullable<string>
  position?: nullable<number>
  active?: nullable<boolean>
}
