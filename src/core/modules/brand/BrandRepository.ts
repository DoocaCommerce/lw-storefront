import { client } from '../../services/GraphqlService'
import { Brand, BrandFields, BrandList, BrandListResponse, BrandResponse, OptionsGetBrand, OptionsGetBrandList } from './BrandTypes'

const IMAGE_DEFAULT_FIELDS = [
  'alt',
  'src'
]

const BANNER_DEFAULT_FIELDS = IMAGE_DEFAULT_FIELDS

const IMAGE_VALUE = `image {${IMAGE_DEFAULT_FIELDS.join()}}`
const BANNER_VALUE = `banner {${BANNER_DEFAULT_FIELDS.join()}}`

const BRAND_QUERY_DEFAULT_FIELDS = [
  'id',
  'hotsite_id',
  'external_id',
  'name',
  'slug',
  'description',
  'short_description',
  IMAGE_VALUE,
  BANNER_VALUE,
  'meta_title',
  'meta_keywords',
  'meta_description',
  'position',
  'url',
  'active',
  'created_at',
  'updated_at'
]

const PAGE_INFO_FIELDS = [
  'hasNextPage',
  'hasPreviousPage',
  'startCursor',
  'endCursor',
  'first',
  'total'
]

export class BrandRepository {
  private static replaceBrandComplexFields(fields: Array<String>): Array<String> {
    const BRAND_COMPLEX_FIELDS = {
      'image': IMAGE_VALUE,
      'banner': BANNER_VALUE
    }

    Object.keys(BRAND_COMPLEX_FIELDS).forEach(key => {
      const indexOfField = fields.indexOf('category')
      const isFieldSelected = indexOfField != -1 
      isFieldSelected && (fields[indexOfField] = BRAND_COMPLEX_FIELDS[key])
    })
    
    return fields
}

  static async getBrandList(optionsGetBrandList: OptionsGetBrandList): Promise<BrandList> {

    const { fields, filter } = optionsGetBrandList

    const nodeQueryFields: String = (fields ? this.replaceBrandComplexFields(fields) : BRAND_QUERY_DEFAULT_FIELDS).join()

    const brandListQuery = `
      query getBrands($filter: filterPaginationBrand) {
        brands(filter: $filter) {
          edges {
            node {
              ${nodeQueryFields}
            }
            cursor
          }
          pageInfo {
            ${PAGE_INFO_FIELDS.join()}
          }
        }
      }
    `

    const { brands }:BrandListResponse = await client.query(brandListQuery, filter && {filter: {...filter}})
   
    return brands
  }

  private static async getBrand(optionsGetBrand: OptionsGetBrand): Promise<Brand> {

    const { fields, filter } = optionsGetBrand

    const queryFields: String = fields ? fields.join() : BRAND_QUERY_DEFAULT_FIELDS.join()

    const brandQuery = `
      query getBrand($filter: filterBrand){
        brand(filter: $filter){
          ${queryFields}
        }
      }
    `

    const { brand }:BrandResponse = await client.query(brandQuery, filter && {filter: {...filter}})
  
    return brand
  }

  static async getBrandById(id: Number, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getBrand({fields: fields || null, filter: {id: id}})
  }

  static async getBrandBySlug(slug: String, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getBrand({fields: fields || null, filter: {slug: slug}})
  }
}
