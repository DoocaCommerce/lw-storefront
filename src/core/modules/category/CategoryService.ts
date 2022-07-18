import { CategoryRepositoryGql } from './CategoryRepositoryGql'
import { CategoryRepositoryJson } from './CategoryRepositoryJson'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from './CategoryTypes'

const Repository =
  dc_config.mock?.category && dc_config.mock?.categoryTree ? CategoryRepositoryJson : CategoryRepositoryGql

export class CategoryService {
  static async getById(id: string, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getTreeById(id: string, fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await Repository.getTreeById(Number(id), fields)
    return result
  }

  static async getTreeBySlug(slug: string, fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await Repository.getTreeBySlug(slug, fields)
    return result
  }
}
