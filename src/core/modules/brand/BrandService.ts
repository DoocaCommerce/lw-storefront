import { BrandRepository } from './BrandRepository'
import { Brand, BrandFilter } from './BrandTypes'

export class BrandService {
  static async getBrands(filter?: BrandFilter): Promise<Brand[]> {
    const result:Brand[] = await BrandRepository.getBrands(filter)
    return result
  }
  
  static async getBrandsById(id: number): Promise<Brand[]> {
    const result:Brand[] = await BrandRepository.getBrandsById(id)
    return result
  } 

  static async getBrandsBySlug(slug: string): Promise<Brand[]> {
    const result:Brand[] = await BrandRepository.getBrandsBySlug(slug)
    return result
  } 
}
