const SHOWCASE_IMAGE_DEFAULT_FIELDS = ['url', 'alt']

const IMAGE_COMMON_COMPLEX_FIELD = `image {${SHOWCASE_IMAGE_DEFAULT_FIELDS.join()}}`

const BANNER_COMMON_COMPLEX_FIELD = `banner {${SHOWCASE_IMAGE_DEFAULT_FIELDS.join()}}`

const SHOWCASE_BRAND_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'description',
  'short_description',
  IMAGE_COMMON_COMPLEX_FIELD,
  BANNER_COMMON_COMPLEX_FIELD,
  'url'
]

const SHOWCASE_CATEGORY_DEFAULT_FIELDS = [
  'id',
  'name',
  'slug',
  'description',
  IMAGE_COMMON_COMPLEX_FIELD,
  'breadcrumb',
  'google_taxonomy_id',
  'url'
]

const SHOWCASE_PAYMENT_FIELDS = ['name', 'method', 'discount', 'parcels', 'total', 'parcel_price', 'has_interest']

const SHOWCASE_FEATURE_VALUE_DEFAULT_FIELDS = ['id', 'name', 'slug', `image {${SHOWCASE_IMAGE_DEFAULT_FIELDS.join()}}`]

const SHOWCASE_FEATURE_FIELDS = [
  'id',
  'name',
  'slug',
  'image',
  `values {${SHOWCASE_FEATURE_VALUE_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_PRODUCT_IMAGE_DEFAULT_FIELDS = ['url', 'alt', 'color_ids']

const SHOWCASE_COLOR_DEFAULT_VALUES = [
  'id',
  'name',
  'slug',
  'hexadecimal',
  `image {${SHOWCASE_IMAGE_DEFAULT_FIELDS.join()}}`,
  `product_images {${SHOWCASE_PRODUCT_IMAGE_DEFAULT_FIELDS.join()}}`
]

const SHOWCASE_COMPLEX_FIELDS = {
  brands: `brands {${SHOWCASE_BRAND_DEFAULT_FIELDS.join()}}`,
  category: `category {${SHOWCASE_CATEGORY_DEFAULT_FIELDS.join()}}`,
  images: `images {${SHOWCASE_IMAGE_DEFAULT_FIELDS.join()}}`,
  payments: `payments {${SHOWCASE_PAYMENT_FIELDS.join()}}`,
  features: `features {${SHOWCASE_FEATURE_FIELDS.join()}}`
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
  SHOWCASE_COMPLEX_FIELDS.category,
  'category',
  'categories',
  'color',
  'colors',
  'attribute',
  'attribute_secondary',
  SHOWCASE_COMPLEX_FIELDS.features,
  'variation_id',
  'variations',
  'components',
  'component_groups'
]
