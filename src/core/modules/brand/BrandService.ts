import { BrandRepository } from './BrandRepository'
import { Brand, BrandFields } from './BrandTypes'

export class BrandService {

  
  static async getBrandById(id: number, fields?: Array<BrandFields>): Promise<Brand> {
    const result:Brand = await BrandRepository.getBrandById(id, fields)
    return result
  } 

  static async getBrandBySlug(slug: string, fields?: Array<BrandFields>): Promise<Brand> {
    const result:Brand = await BrandRepository.getBrandBySlug(slug, fields)
    return result
  } 
}
