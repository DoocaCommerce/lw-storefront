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

export class BrandRepositoryGql {
  static async getList({ fields, filter }: OptionsGetBrandList): Promise<BrandList> {
    const brandQuery = new BrandQueries(fields)
    const brandListQuery: string = brandQuery.listFullQuery()
    try {
      const { brands }: BrandListResponse = await client.query(brandListQuery, filter && { filter: { ...filter } })

      return brands
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getOne({ fields, filter }: OptionsGetBrand): Promise<Brand> {
    const brandQuery = new BrandQueries(fields)
    const brandGetOneQuery: string = brandQuery.getOnefullQuery()

    try {
      const { brand }: BrandResponse = await client.query(brandGetOneQuery, filter && { filter: { ...filter } })

      return brand
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<BrandFields>): Promise<Brand> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
