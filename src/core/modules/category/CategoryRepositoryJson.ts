import { CategoryFields, CategoryTreeFields } from './CategoryTypes'

export class CategoryRepositoryJson {
  static async getById(id: Number, fields?: Array<CategoryFields>) {
    const categories = dc_config.mock?.category
    const result = categories && categories.filter(category => category.id == id)
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<CategoryFields>) {
    const categories = dc_config.mock?.category
    const result = categories && categories.filter(category => category.slug == slug)
    return result || {}
  }
}
