import { nullable } from '../../types/NullableTypes'

export interface LandingPage<T> {
  shop_id?: nullable<Number>
  id?: nullable<String>
  name?: nullable<String>
  content?: nullable<T>
  slug?: nullable<String>
  not_index?: nullable<Boolean>
  active?: nullable<Boolean>
  url?: nullable<String>
  created_at?: nullable<String>
  updated_at?: nullable<String>
  meta_titlen?: nullable<String>
  meta_description?: nullable<String>
  meta_keywords?: nullable<String>
}

export interface LandingPageResponse {
  landingPage: LandingPage<string>
}

export interface OptionsGetLandingPage {
  fields: nullable<Array<LandingPageFields>>
  filter: LandingPageFilter
}

export interface LandingPageFilter {
  id?: nullable<Number>
  slug?: nullable<String>
}

export type LandingPageFields =
  | 'shop_id'
  | 'id'
  | 'name'
  | 'content'
  | 'slug'
  | 'not_index'
  | 'active'
  | 'url'
  | 'created_at'
  | 'updated_at'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
