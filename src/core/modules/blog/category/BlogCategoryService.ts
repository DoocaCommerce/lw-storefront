import { BlogCategoryRepositoryGql } from './BlogCategoryRepositoryGql'
import { BlogCategoryRepositoryJson } from './BlogCategoryRepositoryJson'
import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

const Repository = dc_config.mock?.blogCategory ? BlogCategoryRepositoryJson : BlogCategoryRepositoryGql

export class BlogCategoryService {
  static async getById(id: Number, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getById(id, fields)
    return result
  }

  static async getBySlug(slug: String, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getList(fields?: Array<BlogCategoryFields>): Promise<Array<BlogCategory>> {
    const result: Array<BlogCategory> = await Repository.getList(fields)
    return result
  }
}
