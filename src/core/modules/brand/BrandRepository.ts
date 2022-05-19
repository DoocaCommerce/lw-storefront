import { client } from '../../services/GraphqlService'
import { Brand, BrandFilter, BrandResponse } from './BrandTypes'

export class BrandRepository {
  static async getBrands(filter?: BrandFilter): Promise<Brand[]> {
    const brandQuery = `
      query getBrand($filter: filterBrand){
        brand(filter: $filter){
          id
          name
          slug
          position
          url
          active
          created_at
          external_id
          hotsite_id
          description
          short_description
          image {
            alt
            src
          }
          banner
          meta_title
          meta_keywords
          meta_description
          updated_at
      }
    }
  `

    const { brand }:BrandResponse = await client.query(brandQuery, filter && {filter: {...filter}})
  
    return brand
  }

  static async getBrandsById(id: number) {
    return this.getBrands({id: id})
  }

  static async getBrandsBySlug(slug: string) {
    return this.getBrands({slug: slug})
  }
}
