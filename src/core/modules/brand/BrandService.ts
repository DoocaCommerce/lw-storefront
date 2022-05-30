import { PaginationFilter } from '../../types/PaginationTypes'
import { BrandRepository } from './BrandRepository'
import { Brand, BrandFields, BrandList } from './BrandTypes'

export class BrandService {
  static async getBrandList(pagenationFilter: PaginationFilter, fields?: Array<BrandFields>): Promise<BrandList> {
    const result: BrandList = await BrandRepository.getBrandList({ fields: fields || null, filter: pagenationFilter })
    return result
  }

  static async getBrandById(id: Number, fields?: Array<BrandFields>): Promise<Brand> {
    const result: Brand = await BrandRepository.getBrandById(id, fields)
    return result
  }

  static async getBrandBySlug(slug: String, fields?: Array<BrandFields>): Promise<Brand> {
    const result: Brand = await BrandRepository.getBrandBySlug(slug, fields)
    return result
  }
}
