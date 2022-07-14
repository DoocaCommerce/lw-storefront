import { nullable } from '../../../core/types/NullableTypes'

export interface Apps {
  id?: nullable<String>
  slug?: nullable<Number>
  price?: nullable<Number>
  shop_id?: nullable<Number>
  store_app_id?: nullable<Number>
  content?: nullable<String>
  user_id?: nullable<String>
  bridge_package_id?: nullable<String>
}

export interface AppsFilter {
  id: nullable<Number>
}

export interface AppsResponse {
  apps: Apps
}

export type AppsFields =
  | 'id'
  | 'slug'
  | 'price'
  | 'shop_id'
  | 'store_app_id'
  | 'content'
  | 'user_id'
  | 'bridge_package_id'
