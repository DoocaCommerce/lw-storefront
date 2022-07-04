import { client } from '../../../services/GraphqlService'
import {
  BlogCategory,
  BlogCategoryFields,
  BlogCategoryListResponse,
  BlogCategoryResponse,
  OptionsGetBlogCategory
} from './BlogCategoryTypes'

import { BlogCategoryQueries } from './BlogCategoryQueries'

export class BlogCategoryRepositoryGql {
  static async getBlogCategoryList(fields?: Array<BlogCategoryFields>): Promise<Array<BlogCategory>> {
    const blogCategoryQuery = new BlogCategoryQueries(fields)
    const blogCategoryListQuery: string = blogCategoryQuery.listFullQuery()
    try {
      const { blogCategories }: BlogCategoryListResponse = await client.query(blogCategoryListQuery)

      return blogCategories
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getBlogCategory(OptionsGetBlogCategory: OptionsGetBlogCategory): Promise<BlogCategory> {
    const { fields, filter } = OptionsGetBlogCategory

    const blogCategoryQuery = new BlogCategoryQueries(fields)
    const blogCategoryGetOneQuery: string = blogCategoryQuery.getOnefullQuery()
    try {
      const { blogCategory }: BlogCategoryResponse = await client.query(
        blogCategoryGetOneQuery,
        filter && { filter: { ...filter } }
      )

      return blogCategory
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getBlogCategoryById(id: Number, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    return this.getBlogCategory({ fields: fields || null, filter: { id: id } })
  }

  static async getBlogCategoryBySlug(slug: String, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
    return this.getBlogCategory({ fields: fields || null, filter: { slug: slug } })
  }
}
