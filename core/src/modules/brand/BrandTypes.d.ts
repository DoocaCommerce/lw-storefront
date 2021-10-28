import { Image } from '../../types/ImageTypes'

export interface Brand {
  id: Number
  hotsite_id: Number
  name: String
  slug: String
  description: String
  short_description: String
  image: Image
  banner: String
  meta_title: String
  meta_keywords: String
  meta_description: String
  position: Number
  url: String
  active: Boolean
  created_at: String
  updated_at: String
}
