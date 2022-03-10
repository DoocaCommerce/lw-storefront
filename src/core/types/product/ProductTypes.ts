import { Color } from './ColorTypes'
import { Brand } from './BrandTypes'
import { Feature } from './FeatureTypes'
import { Payments } from './PaymentsTypes'
import { Category } from '../CategoryTypes'
import { Component } from './ComponentTypes'
import { Attribute } from './AttributeTypes'
import { ProductImage } from './ProductImageTypes'
import { ComponentGroup } from './ComponentGroupTypes'
import { ProductVariation } from './ProductVariationTypes'
import { nullable } from '../NullableTypes'

export interface Product {
  id: number
  name: string
  slug: string
  url: string
  created_at: string
  updated_at: string
  payments: Payments
  grid_id?: nullable<number>
  external_id?: nullable<string>
  category_default_id?: nullable<number>
  brand_id?: nullable<number>
  color_id?: nullable<number>
  hotsite_id?: nullable<number>
  description?: nullable<string>
  short_description?: nullable<string>
  relevance?: nullable<number>
  tags?: nullable<string>
  min_quantity?: nullable<number>
  max_quantity?: nullable<number>
  sell_in_kit_only?: nullable<boolean>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  meta_keywords?: nullable<string>
  kit?: nullable<boolean>
  kit_markup?: nullable<number>
  is_virtual?: nullable<boolean>
  is_pre_sale?: nullable<boolean>
  images?: nullable<ProductImage[]>
  image?: nullable<ProductImage>
  video?: nullable<string>
  weight?: nullable<number>
  depth?: nullable<number>
  width?: nullable<number>
  height?: nullable<number>
  sell_out_of_stock?: nullable<boolean>
  price_out_of_stock?: nullable<number>
  additional_time_out_of_stock?: nullable<number>
  balance?: nullable<number>
  selling_out_of_stock?: nullable<boolean>
  price?: nullable<number>
  min_price_range?: nullable<number>
  max_price_range?: nullable<number>
  has_price_range?: nullable<boolean>
  price_compare?: nullable<number>
  discount?: nullable<number>
  billet_discount?: nullable<number>
  payments_reason?: nullable<string>
  warranty?: nullable<string>
  model?: nullable<string>
  gender?: nullable<string>
  age_group?: nullable<string>
  st?: nullable<number>
  ncm?: nullable<string>
  ipi?: nullable<number>
  active?: nullable<boolean>
  brand?: nullable<Brand>
  category?: nullable<Category>
  categories?: nullable<Category[]>
  color?: nullable<Color>
  colors?: nullable<Color[]>
  attribute?: nullable<Attribute>
  attribute_secondary?: nullable<Attribute>
  features?: nullable<Feature[]>
  variation?: nullable<ProductVariation>
  variations?: nullable<ProductVariation[]>
  components?: nullable<Component[]>
  component_groups?: nullable<ComponentGroup[]>
}
