export class ShowcaseQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getImageFields() {
    return '{alt, url}'
  }

  private getComponentGroupsFields() {
    return `{id, shop_id, name, description, slug, optional}`
  }

  private getVariationFields() {
    return `
      {
        id,
        product_id,
        price,
        color_id,
        color_secondary_id,
        attribute_value_id,
        attribute_value_secondary_id,
        reference,
        slug,
        price_compare,
        sku,
        gtin,
        mpn,
        additional_shipping_time,
        images ${this.getImageFields()},
        balance,
        selling_out_of_stock,
        color ${this.getColorFields()},
        attribute ${this.getAttributeFields()},
        attribute_secondary ${this.getAttributeFields()}
      }`
  }

  private getAttributeFields() {
    return `{id, name, slug, values {id, name, slug}}`
  }

  private getColorFields() {
    return `
    {
        id,
        name,
        slug,
        hexadecimal,
        image {url, alt},
        product_images {url, alt, color_ids}
    }`
  }

  private getFeatureFields() {
    return `{id, name, slug, image ${this.getImageFields()}}`
  }

  private getBrandFields() {
    return `
    {
        id,
        name,
        slug,
        description,
        short_description,
        image ${this.getImageFields()},
        banner ${this.getImageFields()},
        url
    }`
  }

  private getCategoryFields() {
    return `
    {
        id, 
        name, 
        slug, 
        description, 
        image ${this.getImageFields()}, 
        breadcrumb, 
        google_taxonomy_id, 
        url
    }`
  }

  private getPaymentFields() {
    return `{name, method, discount, parcels, total, parcel_price, has_interest}`
  }

  private getComponentFields() {
    return `
    {
        id,
        name,
        slug,
        url,
        payments ${this.getPaymentFields()},
        gtin,
        mpn,
        additional_shipping_time,
        external_id,
        category_default_id,
        hotsite_id,
        description,
        short_description,
        relevance,
        tags,
        min_quantity,
        max_quantity,
        sell_in_kit_only,
        meta_title,
        meta_description,
        meta_keywords,
        kit,
        kit_markup,
        is_virtual,
        is_pre_sale,
        images ${this.getImageFields()},
        video,
        weight,
        depth,
        width,
        height,
        sell_out_of_stock,
        additional_time_out_of_stock,
        balance,
        price,
        min_price_range,
        max_price_range,
        has_price_range,
        price_compare,
        discount,
        billet_discount,
        payments_reason,
        warranty,
        model,
        gender,
        age_group,
        brand ${this.getBrandFields()},
        category ${this.getCategoryFields()},
        categories ${this.getCategoryFields()},
        color ${this.getColorFields()},
        colors ${this.getColorFields()},
        attribute ${this.getAttributeFields()},
        attribute_secondary ${this.getAttributeFields()},
        features ${this.getFeatureFields()},
        variation_id,
        variations ${this.getVariationFields()},
        component_groups ${this.getComponentGroupsFields()}
    }`
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'slug',
      'url',
      `payments ${this.getPaymentFields()}`,
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
      `images ${this.getImageFields()}`,
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
      `brand ${this.getBrandFields()}`,
      `category ${this.getCategoryFields()}`,
      `categories ${this.getCategoryFields()}`,
      `color ${this.getColorFields()}`,
      `colors ${this.getColorFields()}`,
      `attribute ${this.getAttributeFields()}`,
      `attribute_secondary ${this.getAttributeFields()}`,
      `features ${this.getFeatureFields()}`,
      'variation_id',
      `variations ${this.getVariationFields()}`,
      `components ${this.getComponentFields()}`,
      `component_groups ${this.getComponentGroupsFields()}`
    ]
  }

  listFullQuery() {
    return `query Showcases($filter: filterPaginationFilter) {
        showcases(filter: $filter) {
            edges {
              node {
                ${this.getFields()}
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
              first
              total
            }
          }
        }`
  }

  getOnefullQuery() {
    return `query Showcase($filter: filterShowcase) {
        showcase(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
