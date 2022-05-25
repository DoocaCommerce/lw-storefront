import { nullable } from "src/core/types/NullableTypes";

export interface Category {
    id?: nullable<Number>
    name?: nullable<String>
    slug?: nullable<String>
    position?: nullable<Number>
    depth?: nullable<Number>
    breadcrumb?: nullable<String>
    url?: nullable<String>
    active?: nullable<Boolean>
    created_at?: String
    updated_at?: String
    parent_id?: nullable<Number>
    hotsite_id?: nullable<Number>
    external_id?: nullable<Number>
    description?: nullable<String>
    image?: nullable<String>
    banner?: nullable<String>
    banner_link?: nullable<String>
    google_taxonomy_id?: nullable<Number>
    meta_title?: nullable<String>
    meta_keywords?: nullable<String>
    meta_description?: nullable<String>
}

export interface CategoryFilter {
    id?: Number
    slug?: String
}
  
export interface CategoryResponse {
    category: Category
}


export interface OptionsGetCategory {
    fields: nullable<CategoryFields[]> 
    filter?: CategoryFilter
}

export type CategoryFields = "id" | "name" | "slug" | "position" | "depth" | "breadcrumb" | "url"
| "active" | "created_at" | "updated_at" | "parent_id" | "hotsite_id" | "external_id" | "description"
| "image" | "banner" | "banner_link" | "google_taxonomy_id" | "meta_title" | "meta_keywords" | "meta_description"

