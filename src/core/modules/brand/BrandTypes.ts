import { nullable } from '../../types/NullableTypes'
import { Image } from '../../types/ImageTypes'
import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'

export interface Brand {
  id?: String
  hotsite_id?: nullable<Number>
  external_id?: nullable<Number>
  name?: nullable<String>
  slug?: nullable<String>
  description?: nullable<String>
  short_description?: nullable<String>
  image?: nullable<Image>
  banner?: nullable<Image>
  meta_title?: nullable<String>
  meta_keywords?: nullable<String>
  meta_description?: nullable<String>
  position?: nullable<Number>
  url?: nullable<String>
  active?: Boolean
  created_at?: String
  updated_at?: String
}

export interface BrandEdges extends PageableEdgeObject<Brand> {}

export interface BrandList extends PageableListObject<BrandEdges> {}

export interface BrandListResponse {
  brands: BrandList
}

export interface BrandFilter {
  id?: Number
  slug?: String
}

export interface BrandResponse {
  brand: Brand
}

export interface OptionsGetBrand {
  fields: nullable<Array<BrandFields>>
  filter?: BrandFilter
}

export interface OptionsGetBrandList {
  fields: nullable<Array<BrandFields>>
  filter: PaginationFilter
}

export type BrandFields =
  | 'id'
  | 'hotsite_id'
  | 'external_id'
  | 'name'
  | 'slug'
  | 'description'
  | 'short_description'
  | 'image {alt, src}'
  | 'banner {alt, src}'
  | 'meta_title'
  | 'meta_keywords'
  | 'meta_description'
  | 'position'
  | 'url'
  | 'active'
  | 'created_at'
  | 'updated_at'
