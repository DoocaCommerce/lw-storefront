import { Image } from '../ImageTypes'
import { nullable } from '../NullableTypes'

export interface Component {
  id: number
  name: string
  slug: string
  url: string
  grid_id?: nullable<number>
  image?: nullable<Image>
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
  product_component_group_id?: nullable<number>
}
