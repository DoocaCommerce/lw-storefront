import { nullable } from '../../../types/NullableTypes'
import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../../types/PaginationTypes'

export interface BlogPost {
  id?: nullable<Number>
  post_category_id?: nullable<Number>
  name?: nullable<String>
  slug?: nullable<String>
  image?: nullable<String>
  description?: nullable<String>
  tags?: nullable<String>
  active?: nullable<Boolean>
  url?: nullable<String>
  meta_title?: nullable<String>
  meta_description?: nullable<String>
  meta_keywords?: nullable<String>
  created_at?: nullable<String>
  updated_at?: nullable<String>
  category?: nullable<BlogPostCategory>
}

export interface BlogPostCategory {
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

export interface BlogPostResponse {
  blogPost: BlogPost
}

export interface BlogPostListResponse {
  blogPosts: BlogPostList
}

export interface BlogPostEdges extends PageableEdgeObject<BlogPost> {}

export interface BlogPostList extends PageableListObject<BlogPostEdges> {}

export interface OptionsGetBlogPost {
  fields: nullable<Array<BlogPostFields>>
  filter: BlogPostFilter
}

export interface BlogPostListFilter extends PaginationFilter {
  post_category_id?: nullable<Number>
}

export interface OptionsGetBlogPostList {
  fields: nullable<Array<BlogPostFields>>
  filter: BlogPostListFilter
}

export interface BlogPostFilter {
  id?: nullable<Number>
  slug?: nullable<String>
  post_category_id?: nullable<Number>
}

export type BlogPostFields =
  | 'id'
  | 'post_category_id'
  | 'name'
  | 'slug'
  | 'image'
  | 'description'
  | 'tags'
  | 'active'
  | 'url'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
  | 'created_at'
  | 'updated_at'
  | 'category'

export type BlogPostCategoryFields =
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
