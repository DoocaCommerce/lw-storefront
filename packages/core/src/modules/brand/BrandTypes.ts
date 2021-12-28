import { Image } from '../../common/ImageTypes'

export interface Brand {
  id: Number
  hotsite_id: Number
  name: string
  slug: string
  description: string
  short_description: string
  image: Image
  banner: string
  meta_title: string
  meta_keywords: string
  meta_description: string
  position: Number
  url: string
  active: Boolean
  created_at: string
  updated_at: string
}

export interface BrandRepositoryType {
  getBrands(): Promise<Brand[]>
}
