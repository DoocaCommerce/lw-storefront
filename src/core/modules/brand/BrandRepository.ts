import { client } from '../../services/GraphqlService'
import { Brand, BrandFields, BrandList, BrandListResponse, BrandResponse, OptionsGetBrand, OptionsGetBrandList } from './BrandTypes'

const BRAND_QUERY_DEFAULT_FIELDS = ["id" , "hotsite_id" , "external_id" , "name" , "slug" , "description" 
    , "short_description" , "image {alt, src}" , "banner" , "meta_title" , "meta_keywords" , "meta_description"
    , "position" , "url" , "active" , "created_at" , "updated_at"]

export class BrandRepository {

  // static async getBrandList(optionsGetBrandList: OptionsGetBrandList): Promise<BrandList> {

  //   const { fields, filter } = optionsGetBrandList

  //   const queryFields: String = fields ? fields.join() : BRAND_QUERY_DEFAULT_FIELDS.join()

  //   const brandListQuery = `
  //     query getBrands($filter: filterPaginationBrand) {
  //       brands(filter: $filter) {
  //         edges {
  //           node {
  //             ${queryFields}
  //           }
  //         }
  //       }
  //     }
  //   `

  //   const { brands }:BrandListResponse = await client.query(brandListQuery, filter && {filter: {...filter}})
   
  //   return brands
  // }

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

  static async getBrandById(id: Number, fields?: BrandFields[]): Promise<Brand> {
    return this.getBrand({fields: fields || null, filter: {id: id}})
  }

  static async getBrandBySlug(slug: String, fields?: BrandFields[]){
    return this.getBrand({fields: fields || null, filter: {slug: slug}})
  }
}
