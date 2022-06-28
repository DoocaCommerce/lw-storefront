import { client } from '../../services/GraphqlService'
import {
  FastSearch,
  OptionsGetShowcase,
  OptionsGetShowcaseList,
  Showcase,
  ShowcaseFields,
  ShowcaseList,
  ShowcaseListResponse,
  ShowcaseResponse
} from './ShowcaseTypes'

const SHOWCASE_IMAGE_DEFAULT_FIELDS = ['url', 'alt']

const SHOWCASE_COMMON_IMAGE_JOINED_FIELDS = SHOWCASE_IMAGE_DEFAULT_FIELDS.join()

const IMAGE_COMMON_COMPLEX_VALUE = `image {${SHOWCASE_COMMON_IMAGE_JOINED_FIELDS}}`

const SHOWCASE_IMAGES_VALUE = `images {${SHOWCASE_COMMON_IMAGE_JOINED_FIELDS}}`

const BANNER_COMMON_COMPLEX_VALUE = `banner {${SHOWCASE_COMMON_IMAGE_JOINED_FIELDS}}`

const SHOWCASE_BRAND_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'description',
  'short_description',
  IMAGE_COMMON_COMPLEX_VALUE,
  BANNER_COMMON_COMPLEX_VALUE,
  'url'
]

const SHOWCASE_BRAND_JOINED_FIELDS = SHOWCASE_BRAND_DEFAULT_FIELDS.join()

const SHOWCASE_BRAND_VALUE = `brand {${SHOWCASE_BRAND_JOINED_FIELDS}}`

const SHOWCASE_CATEGORY_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'description',
  IMAGE_COMMON_COMPLEX_VALUE,
  'breadcrumb',
  'google_taxonomy_id',
  'url'
]

const SHOWCASE_CATEGORY_JOINED_FIELDS = SHOWCASE_CATEGORY_DEFAULT_FIELDS.join()

const SHOWCASE_CATEGORY_VALUE = `category {${SHOWCASE_CATEGORY_JOINED_FIELDS}}`

const SHOWCASE_CATEGORIES_VALUE = `categories {${SHOWCASE_CATEGORY_JOINED_FIELDS}}`

const SHOWCASE_PAYMENT_FIELDS = ['name', 'method', 'discount', 'parcels', 'total', 'parcel_price', 'has_interest']

const SHOWCASE_PAYMANT_JOINED_VALUE = SHOWCASE_PAYMENT_FIELDS.join()

const SHOWCASE_PAYMANTS_VALUE = `payments {${SHOWCASE_PAYMANT_JOINED_VALUE}}`

const SHOWCASE_FEATURE_VALUE_DEFAULT_FIELDS = ['id', 'name', 'slug', IMAGE_COMMON_COMPLEX_VALUE]

const SHOWCASE_FEATURE_FIELDS = [
  'id',
  'name',
  'slug',
  IMAGE_COMMON_COMPLEX_VALUE,
  `values {${SHOWCASE_FEATURE_VALUE_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_FEATURES_VALUE = `features {${SHOWCASE_FEATURE_FIELDS.join()}}`

const SHOWCASE_PRODUCT_IMAGE_DEFAULT_FIELDS = ['url', 'alt', 'color_ids']

const SHOWCASE_COLOR_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'hexadecimal',
  IMAGE_COMMON_COMPLEX_VALUE,
  `product_images {${SHOWCASE_PRODUCT_IMAGE_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_COLOR_JOINED_VALUES = SHOWCASE_COLOR_DEFAULT_FIELDS.join()

const SHOWCASE_COLOR_VALUE = `color {${SHOWCASE_COLOR_JOINED_VALUES}}`

const SHOWCASE_COLORS_VALUE = `colors {${SHOWCASE_COLOR_JOINED_VALUES}}`

const SHOWCASE_ATTRIBUTE_VALUE_DEFAULT_FIELDS = ['id', 'name', 'slug']

const SHOWCASE_ATTRIBUTE_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  `values {${SHOWCASE_ATTRIBUTE_VALUE_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_ATTRIBUTE_JOINED_FIELDS = SHOWCASE_ATTRIBUTE_DEFAULT_FIELDS.join()

const SHOWCASE_ATTRIBUTE_VALUE = `attribute {${SHOWCASE_ATTRIBUTE_JOINED_FIELDS}}`

const SHOWCASE_ATTRIBUTE_SECONDARY_VALUE = `attribute_secondary {${SHOWCASE_ATTRIBUTE_JOINED_FIELDS}}`

const SHOWCASE_VARIATION_DEFAULT_VALUES = [
  'id',
  'product_id',
  'price',
  'color_id',
  'color_secondary_id',
  'attribute_value_id',
  'attribute_value_secondary_id',
  'reference',
  'slug',
  'price_compare',
  'sku',
  'gtin',
  'mpn',
  'additional_shipping_time',
  SHOWCASE_IMAGES_VALUE,
  'balance',
  'selling_out_of_stock',
  SHOWCASE_COLOR_VALUE,
  SHOWCASE_ATTRIBUTE_VALUE,
  SHOWCASE_ATTRIBUTE_SECONDARY_VALUE
]

const SHOWCASE_VARIATIONS_VALUE = `variations {${SHOWCASE_VARIATION_DEFAULT_VALUES.join()}}`

const SHOWCASE_COMPONENT_GROUP_DEFAULT_FIELDS = ['id', 'shop_id', 'name', 'description', 'slug', 'optional']

const SHOWCASE_COMPONENT_GROUPS_VALUE = `component_groups {${SHOWCASE_COMPONENT_GROUP_DEFAULT_FIELDS.join()}}`

const SHOWCASE_COMPONENT_DEFAULT_FIELDS = [
  'product_component_id',
  'product_component_group_id',
  'quantity',
  'default',
  'optional',
  'id',
  'name',
  'slug',
  'url',
  SHOWCASE_PAYMANTS_VALUE,
  'gtin',
  'mpn',
  'additional_shipping_time',
  'external_id',
  'category_default_id',
  'hotsite_id',
  'description',
  'short_description',
  'relevance',
  'tags',
  'min_quantity',
  'max_quantity',
  'sell_in_kit_only',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'kit',
  'kit_markup',
  'is_virtual',
  'is_pre_sale',
  SHOWCASE_IMAGES_VALUE,
  'video',
  'weight',
  'depth',
  'width',
  'height',
  'sell_out_of_stock',
  'additional_time_out_of_stock',
  'balance',
  'price',
  'min_price_range',
  'max_price_range',
  'has_price_range',
  'price_compare',
  'discount',
  'billet_discount',
  'payments_reason',
  'warranty',
  'model',
  'gender',
  'age_group',
  SHOWCASE_BRAND_VALUE,
  SHOWCASE_CATEGORY_VALUE,
  SHOWCASE_CATEGORIES_VALUE,
  SHOWCASE_COLOR_VALUE,
  SHOWCASE_COLORS_VALUE,
  SHOWCASE_ATTRIBUTE_VALUE,
  SHOWCASE_ATTRIBUTE_SECONDARY_VALUE,
  SHOWCASE_FEATURES_VALUE,
  'variation_id',
  SHOWCASE_VARIATIONS_VALUE,
  SHOWCASE_COMPONENT_GROUPS_VALUE
]

const SHOWCASE_COMPONENT_FULL_FIELDS = [
  ...SHOWCASE_COMPONENT_DEFAULT_FIELDS,
  `components {${SHOWCASE_COMPONENT_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_COMPLEX_FIELDS = {
  brand: SHOWCASE_BRAND_VALUE,
  category: SHOWCASE_CATEGORY_VALUE,
  categories: SHOWCASE_CATEGORIES_VALUE,
  images: SHOWCASE_IMAGES_VALUE,
  payments: SHOWCASE_PAYMANTS_VALUE,
  features: SHOWCASE_FEATURES_VALUE,
  color: SHOWCASE_COLOR_VALUE,
  colors: SHOWCASE_COLORS_VALUE,
  attribute: SHOWCASE_ATTRIBUTE_VALUE,
  attribute_secondary: SHOWCASE_ATTRIBUTE_SECONDARY_VALUE,
  variations: SHOWCASE_VARIATIONS_VALUE,
  components: `components {${SHOWCASE_COMPONENT_FULL_FIELDS.join()}}`,
  component_groups: SHOWCASE_COMPONENT_GROUPS_VALUE
}

const SHOWCASE_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'url',
  SHOWCASE_COMPLEX_FIELDS.payments,
  'gtin',
  'mpn',
  'additional_shipping_time',
  'external_id',
  'category_default_id',
  'hotsite_id',
  'description',
  'short_description',
  'relevance',
  'tags',
  'min_quantity',
  'max_quantity',
  'sell_in_kit_only',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'kit',
  'kit_markup',
  'is_virtual',
  'is_pre_sale',
  SHOWCASE_COMPLEX_FIELDS.images,
  'video',
  'weight',
  'depth',
  'width',
  'height',
  'sell_out_of_stock',
  'additional_time_out_of_stock',
  'balance',
  'price',
  'min_price_range',
  'max_price_range',
  'has_price_range',
  'price_compare',
  'discount',
  'billet_discount',
  'payments_reason',
  'warranty',
  'model',
  'gender',
  'age_group',
  SHOWCASE_COMPLEX_FIELDS.brand,
  SHOWCASE_COMPLEX_FIELDS.category,
  SHOWCASE_COMPLEX_FIELDS.categories,
  SHOWCASE_COMPLEX_FIELDS.color,
  SHOWCASE_COMPLEX_FIELDS.colors,
  SHOWCASE_COMPLEX_FIELDS.attribute,
  SHOWCASE_COMPLEX_FIELDS.attribute_secondary,
  SHOWCASE_COMPLEX_FIELDS.features,
  'variation_id',
  SHOWCASE_VARIATIONS_VALUE,
  SHOWCASE_COMPLEX_FIELDS.components,
  SHOWCASE_COMPLEX_FIELDS.component_groups
]

export class ShowcaseRepository {
  private static replaceShowcaseComplexFields(fields: Array<String>): Array<String> {
    Object.keys(SHOWCASE_COMPLEX_FIELDS).forEach(complexFieldItemKey => {
      const indexOfField = fields.indexOf(complexFieldItemKey)
      const isFieldSelected = indexOfField != -1
      isFieldSelected && (fields[indexOfField] = SHOWCASE_COMPLEX_FIELDS[complexFieldItemKey])
    })

    return fields
  }

  static async getShowcaseList(optionsGetShowcaseList: OptionsGetShowcaseList): Promise<ShowcaseList> {
    const { fields, filter } = optionsGetShowcaseList

    const queryFields: String = (fields ? this.replaceShowcaseComplexFields(fields) : SHOWCASE_DEFAULT_FIELDS).join()

    const showcaseQuery = `
      query Showcases($filter: filterPaginationFilter) {
        showcases(filter: $filter) {
          edges {
            node {
              ${queryFields}
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            total
          }
        }
      }
    `

    const { showcases }: ShowcaseListResponse = await client.query(showcaseQuery, filter && { filter: { ...filter } })

    return showcases
  }

  private static async getShowcase(optionsGetShowcase: OptionsGetShowcase): Promise<Showcase> {
    const { fields, filter } = optionsGetShowcase

    const queryFields: String = (fields ? this.replaceShowcaseComplexFields(fields) : SHOWCASE_DEFAULT_FIELDS).join()

    const showcaseQuery = `
      query Showcase($filter: filterShowcase) {
        showcase(filter: $filter) {
          ${queryFields}
        }
      }
    `

    const { showcase }: ShowcaseResponse = await client.query(showcaseQuery, filter && { filter: { ...filter } })

    return showcase
  }

  static async getShowcaseById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { id: id } })
  }

  static async getShowcaseBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { slug: slug } })
  }

  static async getShowcaseByFastSearch(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { fastSearch: fastSearch } })
  }
}
