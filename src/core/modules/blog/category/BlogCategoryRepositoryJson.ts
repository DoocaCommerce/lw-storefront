import { BlogCategoryFields } from './BlogCategoryTypes'

export class BlogCategoryRepositoryJson {
  static async getBlogCategoryList(fields?: Array<BlogCategoryFields>) {
    const result = dc_config.mock?.blogCategory
    return result || {}
  }

  static async getBlogCategoryById(id: Number, fields?: Array<BlogCategoryFields>) {
    const blogCategories = dc_config.mock?.blogCategory
    const result = blogCategories && blogCategories.filter(blogCategory => blogCategory.id == id)[0]
    return result || {}
  }

  static async getBlogCategoryBySlug(slug: String, fields?: Array<BlogCategoryFields>) {
    const blogCategories = dc_config.mock?.blogCategory
    const result = blogCategories && blogCategories.filter(blogCategory => blogCategory.slug == slug)[0]
    return result || {}
  }
}
