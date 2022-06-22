import { nullable } from '../../../types/NullableTypes'

export interface BlogCategory {
  id?: nullable<Number>
  name?: nullable<String>
  slug?: nullable<String>
  description?: nullable<String>
  meta_title?: nullable<String>
  meta_description?: nullable<String>
  active?: nullable<Boolean>
  posts_count?: nullable<Number>
  position?: nullable<Number>
  url?: nullable<String>
  created_at?: nullable<String>
  updated_at?: nullable<String>
}

export interface BlogCategoryResponse {
  blogCategory: BlogCategory
}

export interface BlogCategoryListResponse {
  blogCategories: Array<BlogCategory>
}

export interface OptionsGetBlogCategory {
  fields: nullable<Array<BlogCategoryFields>>
  filter: BlogCategoryFilter
}

export interface BlogCategoryFilter {
  id?: nullable<Number>
  slug?: nullable<String>
}

export type BlogCategoryFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'description'
  | 'meta_title'
  | 'meta_description'
  | 'active'
  | 'posts_count'
  | 'position'
  | 'url'
  | 'created_at'
  | 'updated_at'
