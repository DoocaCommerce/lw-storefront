import { BlogCategoryRepository } from './BlogCategoryRepository'
import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

export class BlogCategoryService {
  static async getBlogCategoryById(id: Number, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await BlogCategoryRepository.getBlogCategoryById(id, fields)
    return result
  }

  static async getBlogCategoryBySlug(slug: String, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    const result: BlogCategory = await BlogCategoryRepository.getBlogCategoryBySlug(slug, fields)
    return result
  }

  static async getBlogCategoryList(fields?: Array<BlogCategoryFields>): Promise<Array<BlogCategory>> {
    const result: Array<BlogCategory> = await BlogCategoryRepository.getBlogCategoryList(fields)
    return result
  }
}
