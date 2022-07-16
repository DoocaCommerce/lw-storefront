import { client } from '../../../services/GraphqlService'
import { BlogPostQueries } from './BlogPostQueries'
import {
  BlogPost,
  BlogPostFields,
  BlogPostList,
  BlogPostListResponse,
  BlogPostResponse,
  OptionsGetBlogPost,
  OptionsGetBlogPostList
} from './BlogPostTypes'

export class BlogPostRepositoryGql {
  static async getList({ fields, filter }: OptionsGetBlogPostList): Promise<BlogPostList> {
    const blogPostQuery = new BlogPostQueries(fields)
    const blogPostListQuery: string = blogPostQuery.listFullQuery()
    try {
      const { blogPosts }: BlogPostListResponse = await client.query(
        blogPostListQuery,
        filter && { filter: { ...filter } }
      )

      return blogPosts
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getBlogPost({ fields, filter }: OptionsGetBlogPost): Promise<BlogPost> {
    const blogPostQuery = new BlogPostQueries(fields)
    const blogPostGetOneQuery: string = blogPostQuery.getOnefullQuery()
    try {
      const { blogPost }: BlogPostResponse = await client.query(
        blogPostGetOneQuery,
        filter && { filter: { ...filter } }
      )

      return blogPost
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    return this.getBlogPost({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    return this.getBlogPost({ fields: fields || null, filter: { slug: slug } })
  }
}
