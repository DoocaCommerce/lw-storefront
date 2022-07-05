import { CategoryFields, CategoryTreeFields } from './CategoryTypes'

export class CategoryTreeRepositoryJson {
  static async getTreeById(id: Number, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = dc_config.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.id == id)
    return result || {}
  }

  static async getTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = dc_config.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.slug == slug)
    return result || {}
  }
}
