import { PaginationFilter } from '../../types/PaginationTypes'
import { BrandRepositoryGql } from './BrandRepositoryGql'
import { BrandRepositoryJson } from './BrandRepositoryJson'
import { Brand, BrandFields, BrandList } from './BrandTypes'

const Repository = dc_config.mock?.brand ? BrandRepositoryJson : BrandRepositoryGql

export class BrandService {
  static async getList(paginationFilter: PaginationFilter, fields?: Array<BrandFields>): Promise<BrandList> {
    try {
      const result: BrandList = await Repository.getList({
        fields: fields || null,
        filter: paginationFilter || { page: 1 }
      })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: string, fields?: Array<BrandFields>): Promise<Brand> {
    try {
      const result: Brand = await Repository.getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getBySlug(slug: string, fields?: Array<BrandFields>): Promise<Brand> {
    try {
      const result: Brand = await Repository.getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
