import { BlogPostRepository } from './BlogPostRepository'
import { BlogPost, BlogPostFields, BlogPostList, BlogPostListFilter } from './BlogPostTypes'

export class BlogPostService {
  static async getBlogPostById(id: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    const result: BlogPost = await BlogPostRepository.getBlogPostById(id, fields)
    return result
  }

  static async getBlogPostBySlug(slug: String, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    const result: BlogPost = await BlogPostRepository.getBlogPostBySlug(slug, fields)
    return result
  }

  static async getBlogPostList(
    paginationFilter: BlogPostListFilter,
    fields?: Array<BlogPostFields>
  ): Promise<BlogPostList> {
    const result: BlogPostList = await BlogPostRepository.getBlogPostList({
      fields: fields || null,
      filter: paginationFilter
    })
    return result
  }
}
