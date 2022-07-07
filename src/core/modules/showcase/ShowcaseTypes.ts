import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/NullableTypes'

export interface Showcase {
  id?: nullable<String>
  name?: nullable<String>
  slug?: nullable<String>
  url?: nullable<String>
  payments?: nullable<ShowcasePayment>
  gtin?: nullable<String>
  mpn?: nullable<String>
  additional_shipping_time?: nullable<Number>
  external_id?: nullable<String>
  category_default_id?: nullable<Number>
  hotsite_id?: nullable<Number>
  description?: nullable<String>
  short_description?: nullable<String>
  relevance?: nullable<Number>
  tags?: nullable<String>
  min_quantity?: nullable<Number>
  max_quantity?: nullable<Number>
  sell_in_kit_only?: nullable<Boolean>
  meta_title?: nullable<String>
  meta_description?: nullable<String>
  meta_keywords?: nullable<String>
  kit?: nullable<Boolean>
  kit_markup?: nullable<Number>
  is_virtual?: nullable<Boolean>
  is_pre_sale?: nullable<Boolean>
  images?: nullable<Array<ShowcaseImage>>
  video?: nullable<String>
  weight?: nullable<Number>
  depth?: nullable<Number>
  width?: nullable<Number>
  height?: nullable<Number>
  sell_out_of_stock?: nullable<Boolean>
  additional_time_out_of_stock?: nullable<Number>
  balance?: nullable<Number>
  price?: nullable<Number>
  min_price_range?: nullable<Number>
  max_price_range?: nullable<Number>
  has_price_range?: nullable<Boolean>
  price_compare?: nullable<Number>
  discount?: nullable<Number>
  billet_discount?: nullable<Number>
  payments_reason?: nullable<String>
  warranty?: nullable<String>
  model?: nullable<String>
  gender?: nullable<String>
  age_group?: nullable<String>
  brand?: nullable<ShowcaseBrand>
  category?: nullable<ShowcaseCategory>
  categories?: nullable<Array<ShowcaseCategory>>
  color?: nullable<ShowcaseColor>
  colors?: nullable<Array<ShowcaseColor>>
  attribute?: nullable<ShowcaseAttribute>
  attribute_secondary?: nullable<ShowcaseAttribute>
  features?: nullable<Array<ShowcaseFeature>>
  variation_id?: nullable<Number>
  variations?: nullable<Array<ShowcaseVariation>>
  components?: nullable<Array<ShowcaseComponent>>
  component_groups?: nullable<Array<ShowcaseComponentGroup>>
}

export interface ShowcaseResponse {
  showcase: nullable<Showcase>
}

export interface ShowcaseListResponse {
  showcases: nullable<ShowcaseList>
}

export interface ShowcaseBrand {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  description: nullable<String>
  short_description: nullable<String>
  image: nullable<ShowcaseImage>
  banner: nullable<ShowcaseImage>
  url: nullable<String>
}

export interface ShowcaseCategory {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  description: nullable<String>
  image: nullable<ShowcaseImage>
  breadcrumb: nullable<String>
  google_taxonomy_id: nullable<String>
  url: nullable<String>
}

export interface ShowcasePayment {
  name: nullable<String>
  method: nullable<String>
  discount: nullable<Number>
  parcels: nullable<Number>
  total: nullable<Number>
  parcel_price: nullable<Number>
  has_interest: nullable<Boolean>
}

export interface ShowcaseFeatureValue {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  image: nullable<ShowcaseImage>
}

export interface ShowcaseFeature {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  image: nullable<ShowcaseImage>
  values: nullable<Array<ShowcaseFeatureValue>>
}

export interface ShowcaseImage {
  url: nullable<String>
  alt: nullable<String>
}

export interface ShowcaseProductImage {
  url: nullable<String>
  alt: nullable<String>
  color_ids: nullable<Number>
}

export interface ShowcaseColor {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  hexadecimal: nullable<String>
  image: nullable<ShowcaseImage>
  product_images: nullable<Array<ShowcaseProductImage>>
}

export interface ShowcaseComponentGroup {
  id: nullable<Number>
  shop_id: nullable<Number>
  name: nullable<String>
  description: nullable<String>
  slug: nullable<String>
  optional: nullable<Boolean>
}

export interface ShowcaseComponent extends Omit<Showcase, 'id' | 'components'> {
  id?: nullable<Number>
  product_component_id: nullable<Number>
  product_component_group_id: nullable<Number>
  quantity: nullable<Number>
  default: nullable<Boolean>
  optional: nullable<Boolean>
}

export interface ShowcaseAttributeValue {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
}

export interface ShowcaseAttribute {
  id: nullable<Number>
  name: nullable<String>
  slug: nullable<String>
  values: nullable<Array<ShowcaseAttributeValue>>
}

export interface ShowcaseVariation {
  id: nullable<Number>
  product_id: nullable<Number>
  price: nullable<Number>
  color_id: nullable<Number>
  color_secondary_id: nullable<Number>
  attribute_value_id: nullable<Number>
  attribute_value_secondary_id: nullable<Number>
  reference: nullable<String>
  slug: nullable<String>
  price_compare: nullable<Number>
  sku: nullable<String>
  gtin: nullable<String>
  mpn: nullable<String>
  additional_shipping_time: nullable<Number>
  images: nullable<Array<ShowcaseImage>>
  balance: nullable<Number>
  selling_out_of_stock: nullable<Boolean>
  color: nullable<ShowcaseColor>
  attribute: nullable<ShowcaseAttribute>
  attribute_secondary: nullable<ShowcaseAttribute>
}

export interface ShowcaseEdge extends PageableEdgeObject<Showcase> {}

export interface ShowcaseList extends PageableListObject<ShowcaseEdge> {}

export interface FastSearch {
  queryString: nullable<String>
  fields?: nullable<Array<ShowcaseFields>>
}

export interface ShowcaseFilter {
  id?: nullable<Number>
  slug?: nullable<String>
  fastSearch?: nullable<FastSearch>
}

export interface ShowcasePaginationFilter extends Pick<PaginationFilter, 'first'> {
  page?: Number
  queryString?: String
}

export interface OptionsGetShowcase {
  fields: nullable<Array<ShowcaseFields>>
  filter: ShowcaseFilter
}

export interface OptionsGetShowcaseList {
  fields: nullable<Array<ShowcaseFields>>
  filter: ShowcasePaginationFilter
}

export type ShowcaseFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'url'
  | 'payments'
  | 'gtin'
  | 'mpn'
  | 'additional_shipping_time'
  | 'external_id'
  | 'category_default_id'
  | 'hotsite_id'
  | 'description'
  | 'short_description'
  | 'relevance'
  | 'tags'
  | 'min_quantity'
  | 'max_quantity'
  | 'sell_in_kit_only'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
  | 'kit'
  | 'kit_markup'
  | 'is_virtual'
  | 'is_pre_sale'
  | 'images'
  | 'video'
  | 'weight'
  | 'depth'
  | 'width'
  | 'height'
  | 'sell_out_of_stock'
  | 'additional_time_out_of_stock'
  | 'balance'
  | 'price'
  | 'min_price_range'
  | 'max_price_range'
  | 'has_price_range'
  | 'price_compare'
  | 'discount'
  | 'billet_discount'
  | 'payments_reason'
  | 'warranty'
  | 'model'
  | 'gender'
  | 'age_group'
  | 'brand'
  | 'category'
  | 'categories'
  | 'color'
  | 'colors'
  | 'attribute'
  | 'attribute_secondary'
  | 'features'
  | 'variation_id'
  | 'variations'
  | 'components'
  | 'component_groups'
