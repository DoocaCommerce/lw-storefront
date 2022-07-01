import { nullable } from '../../types/NullableTypes'

export interface Shop {
  shop_id?: nullable<Number>
  theme_id?: nullable<Number>
  terms_user_id?: nullable<Number>
  users_count?: nullable<Number>
  products_count?: nullable<Number>
  name?: nullable<String>
  slug?: nullable<String>
  dooca_domain?: nullable<String>
  shipping_time_additional?: nullable<String>
  shipping_time_additional_kit?: nullable<String>
  append_to_head?: nullable<String>
  append_to_body?: nullable<String>
  zipcode?: nullable<String>
  customer_register_approves?: nullable<String>
  customer_registerFor?: nullable<String>
  terms_accepted_at?: nullable<String>
  created_at?: nullable<String>
  notifications?: nullable<String>
  schedule_delivery?: nullable<String>
  active?: nullable<Boolean>
  enable_beta?: nullable<Boolean>
  ssl?: nullable<Boolean>
  redirect_temporary?: nullable<Boolean>
  catalog?: nullable<Boolean>
  checkout_note_active?: nullable<Boolean>
  gift_wrapping_active?: nullable<Boolean>
  customer_register_individual?: nullable<Boolean>
  customer_register_company?: nullable<Boolean>
  google_connect?: nullable<Boolean>
  facebook_connect?: nullable<Boolean>
  ideris_connect?: nullable<Boolean>
  updated_at?: nullable<String>
  industry?: nullable<String>
  phrase?: nullable<String>
  description?: nullable<String>
  keywords?: nullable<String>
  email?: nullable<String>
  email_from?: nullable<String>
  domain?: nullable<String>
  shipping_restriction_message?: nullable<String>
  policy_footer?: nullable<String>
  company?: nullable<String>
  cgc?: nullable<String>
  city?: nullable<String>
  state?: nullable<String>
  street?: nullable<String>
  Int?: nullable<Number>
  detail?: nullable<String>
  district?: nullable<String>
  phone?: nullable<String>
  checkout_note_label?: nullable<String>
  gift_wrapping_price?: nullable<String>
  tracker_google_analytics?: nullable<ShopGoogleAnalytics>
  tracker_google_conversion?: nullable<ShopGoogleConversion>
  tracker_facebook_pixel?: nullable<ShopFacebookPixel>
  organization?: nullable<String>
  suspended_at?: nullable<String>
  canceled_at?: nullable<String>
  deleted_at?: nullable<String>
  trial?: nullable<String>
  plan?: nullable<String>
}

export interface ShopGoogleAnalytics {
  id: String
}

export interface ShopGoogleConversion {
  id: String
  label: String
}

export interface ShopFacebookPixel {
  id: String
}

export interface ShopResponse {
  shop: Shop
}

export type ShopFields =
  | 'shop_id'
  | 'theme_id'
  | 'terms_user_id'
  | 'users_count'
  | 'products_count'
  | 'name'
  | 'slug'
  | 'dooca_domain'
  | 'shipping_time_additional'
  | 'shipping_time_additional_kit'
  | 'append_to_head'
  | 'append_to_body'
  | 'zipcode'
  | 'customer_register_approves'
  | 'customer_registerFor'
  | 'terms_accepted_at'
  | 'created_at'
  | 'notifications'
  | 'schedule_delivery'
  | 'active'
  | 'enable_beta'
  | 'ssl'
  | 'redirect_temporary'
  | 'catalog'
  | 'checkout_note_active'
  | 'gift_wrapping_active'
  | 'customer_register_individual'
  | 'customer_register_company'
  | 'google_connect'
  | 'facebook_connect'
  | 'ideris_connect'
  | 'updated_at'
  | 'industry'
  | 'phrase'
  | 'description'
  | 'keywords'
  | 'email'
  | 'email_from'
  | 'domain'
  | 'shipping_restriction_message'
  | 'policy_footer'
  | 'company'
  | 'cgc'
  | 'city'
  | 'state'
  | 'street'
  | 'Int'
  | 'detail'
  | 'district'
  | 'phone'
  | 'checkout_note_label'
  | 'gift_wrapping_price'
  | 'tracker_google_analytics'
  | 'tracker_google_conversion'
  | 'tracker_facebook_pixel'
  | 'organization'
  | 'suspended_at'
  | 'canceled_at'
  | 'deleted_at'
  | 'trial'
  | 'plan'
