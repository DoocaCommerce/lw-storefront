import { BrandFields, OptionsGetBrandList } from './BrandTypes'

export class BrandRepositoryJson {
  static async getList({ fields, filter }: OptionsGetBrandList) {
    const result = dc_config.mock?.brand
    return result || {}
  }

  static async getById(id: Number, fields?: Array<BrandFields>) {
    const brandList = dc_config.mock?.brand
    const result = brandList && brandList.filter(brand => brand.id == id)[0]
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<BrandFields>) {
    const brandList = dc_config.mock?.brand
    const result = brandList && brandList.filter(brand => brand.slug == slug)[0]
    return result || {}
  }
}
