import { Image } from '../../types/ImageTypes'
import { PageInfo, PaginationFilter } from '../../types/PaginationTypes'

export interface Brand {
  id?: Number
  hotsite_id?: Number
  external_id?: Number
  name?: String
  slug?: String
  description?: String
  short_description?: String
  image?: Image
  banner?: String
  meta_title?: String
  meta_keywords?: String
  meta_description?: String
  position?: Number
  url?: String
  active?: Boolean
  created_at?: String
  updated_at?: String
}

export interface BrandEdges {
  node: Brand[]
  cursor: String
}

export interface BrandList {
  edges: BrandEdges
  pageInfo: PageInfo
}

export interface BrandListResponse {
  brands: BrandList
}

export interface BrandFilter {
  id?: number
  slug?: String
}

export interface BrandResponse {
  brand: Brand
}

export interface OptionsGetBrand {
  fields: BrandFields[] | null
  filter?: BrandFilter
}

export interface OptionsGetBrandList {
  fields: BrandFields[] | null
  filter: PaginationFilter
}

export type BrandFields = "id" | "hotsite_id" | "external_id" | "name" | "slug" | "description" 
| "short_description" | "image" | "banner" | "meta_title" | "meta_keywords" | "meta_description"
| "position" | "url" | "active" | "created_at" | "updated_at" 