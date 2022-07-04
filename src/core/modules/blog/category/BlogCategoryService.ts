import { BlogCategoryRepositoryGql } from './BlogCategoryRepositoryGql'
import { BlogCategoryRepositoryJson } from './BlogCategoryRepositoryJson'
import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

const Repository = dc_config.mock?.blogCategory ? BlogCategoryRepositoryJson : BlogCategoryRepositoryGql

export class BlogCategoryService {
  static async getBlogCategoryById(id: Number, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getBlogCategoryById(id, fields)
    return result
  }

  static async getBlogCategoryBySlug(slug: String, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getBlogCategoryBySlug(slug, fields)
    return result
  }

  static async getBlogCategoryList(fields?: Array<BlogCategoryFields>): Promise<Array<BlogCategory>> {
    const result: Array<BlogCategory> = await Repository.getBlogCategoryList(fields)
    return result
  }
}
