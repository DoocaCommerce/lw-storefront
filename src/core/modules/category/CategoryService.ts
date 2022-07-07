import { CategoryRepositoryGql } from './CategoryRepositoryGql'
import { CategoryRepositoryJson } from './CategoryRepositoryJson'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from './CategoryTypes'

const Repository =
  dc_config.mock?.category && dc_config.mock?.categoryTree ? CategoryRepositoryJson : CategoryRepositoryGql

export class CategoryService {
  static async getById(id: Number, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getById(id, fields)
    return result
  }

  static async getBySlug(slug: String, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getTreeById(id: Number, fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await Repository.getTreeById(id, fields)
    return result
  }

  static async getTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await Repository.getTreeBySlug(slug, fields)
    return result
  }
}
