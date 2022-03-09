import { Image } from './ImageTypes'
import { nullable } from './NullableTypes'

export interface Category {
  id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
  banner_link?: nullable<string>
  parent_id?: nullable<number>
  hotsite_id?: nullable<number>
  external_id?: nullable<string>
  description?: nullable<string>
  image?: nullable<Image>
  banner?: nullable<Image>
  position?: nullable<number>
  depth?: nullable<number>
  breadcrumb?: nullable<string>
  google_taxonomy_id?: nullable<number>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  meta_keywords?: nullable<string>
  url?: nullable<string>
  active?: nullable<boolean>
}
