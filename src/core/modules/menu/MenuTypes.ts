import { Image } from '../../../core/types/ImageTypes'
import { nullable } from '../../types/NullableTypes'

export interface Menu {
  id?: nullable<Number>
  name?: nullable<String>
  handle?: nullable<String>
  createdAt?: nullable<String>
  updatedAt?: nullable<String>
  values?: MenuValues
}

export interface MenuValues {
  id?: nullable<Number>
  menu_id?: nullable<Number>
  brand_id?: nullable<Number>
  name?: nullable<String>
  menu_type?: nullable<String>
  slug?: nullable<String>
  menu_type_slug?: nullable<String>
  active?: nullable<Boolean>
  created_at?: nullable<String>
  image?: nullable<Image>
  parent_id?: nullable<String>
  page_id?: nullable<Number>
  hotsite_id?: nullable<Number>
  category_id?: nullable<Number>
  banner?: nullable<String>
  banner_link?: nullable<String>
  is_featured?: nullable<Number>
  link?: nullable<Number>
  menu_type_link?: nullable<Number>
  updated_at?: nullable<String>
  position?: nullable<String>
  children?: Array<MenuValues>
}

export interface OptionsGetMenu {
  fields: nullable<Array<MenuFields>>
  filter?: MenuFIlter
}

export interface MenuFIlter {
  id: Number
}

export interface MenuResponse {
  menu: Menu
}

export interface MenuListResponse {
  menus: Array<Menu>
}

export type MenuFields = 'id' | 'name' | 'handle' | 'createdAt' | 'updatedAt' | 'values'

export type MenuValueFields =
  | 'id'
  | 'menu_id'
  | 'brand_id'
  | 'name'
  | 'menu_type'
  | 'slug'
  | 'menu_type_slug'
  | 'active'
  | 'created_at'
  | 'image'
  | 'parent_id'
  | 'page_id'
  | 'hotsite_id'
  | 'category_id'
  | 'banner'
  | 'banner_link'
  | 'is_featured'
  | 'link'
  | 'menu_type_link'
  | 'updated_at'
  | 'position'
  | 'children'
