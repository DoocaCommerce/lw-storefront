import { nullable } from '../../types/NullableTypes'

export interface Page {
  id?: Number
  name?: nullable<String>
  slug?: nullable<String>
  template?: nullable<String>
  url?: nullable<String>
  active?: nullable<Boolean>
  faq?: nullable<FAQ>
  created_at?: nullable<String>
  updated_at?: nullable<String>
  description?: nullable<String>
  meta_title?: nullable<String>
  meta_description?: nullable<String>
  meta_keywords?: nullable<String>
}

export interface PageListResponse {
  pages: Array<Page>
}

export interface PageResponse {
  pageBy: Page
}

export interface FAQ {
  active?: nullable<Boolean>
  answer?: nullable<String>
  question?: nullable<String>
}

export interface OptionsGetPage {
  fields: nullable<Array<PageFields>>
  filter?: PageFilter
}

export interface PageFilter {
  id?: Number
  slug?: String
}

export type PageFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'template'
  | 'url'
  | 'active'
  | 'faq'
  | 'created_at'
  | 'updated_at'
  | 'description'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
