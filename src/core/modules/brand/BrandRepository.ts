import { client } from '../../services/GraphqlService'
import { BrandQueries } from './BrandQueries'
import {
  Brand,
  BrandFields,
  BrandList,
  BrandListResponse,
  BrandResponse,
  OptionsGetBrand,
  OptionsGetBrandList
} from './BrandTypes'

export class BrandRepository {
  static async getBrandList({ fields, filter }: OptionsGetBrandList): Promise<BrandList> {
    const brandQuery = new BrandQueries(fields)
    const brandListQuery: string = brandQuery.listFullQuery()
    try {
      const { brands }: BrandListResponse = await client.query(brandListQuery, filter && { filter: { ...filter } })

      return brands
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getBrand({ fields, filter }: OptionsGetBrand): Promise<Brand> {
    const brandQuery = new BrandQueries(fields)
    const brandGetOneQuery: string = brandQuery.getOnefullQuery()

    try {
      const { brand }: BrandResponse = await client.query(brandGetOneQuery, filter && { filter: { ...filter } })

      return brand
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getBrandById(id: Number, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getBrand({ fields: fields || null, filter: { id: id } })
  }

  static async getBrandBySlug(slug: String, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getBrand({ fields: fields || null, filter: { slug: slug } })
  }
}
