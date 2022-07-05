import { CategoryRepositoryGql } from './CategoryRepositoryGql'
import { CategoryRepositoryJson } from './CategoryRepositoryJson'
import { CategoryTreeRepositoryJson } from './CategoryTreeRepositoryJson'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from './CategoryTypes'

const Repository = dc_config.mock?.category ? CategoryRepositoryJson : CategoryRepositoryGql
const TreeRepository = dc_config.mock?.categoryTree ? CategoryTreeRepositoryJson : CategoryRepositoryGql

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
    const result: Array<CategoryTree> = await TreeRepository.getTreeById(id, fields)
    return result
  }

  static async getTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await TreeRepository.getTreeBySlug(slug, fields)
    return result
  }
}
