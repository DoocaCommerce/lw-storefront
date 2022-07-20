import { BlogPostRepositoryGql } from './BlogPostRepositoryGql'
import { BlogPostRepositoryJson } from './BlogPostRepositoryJson'
import { BlogPost, BlogPostFields, BlogPostList, BlogPostListFilter } from './BlogPostTypes'

const Repository = dc_config.mock?.blogPost ? BlogPostRepositoryJson : BlogPostRepositoryGql

export class BlogPostService {
  static async getById(id: string, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    const result: BlogPost = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<BlogPostFields>): Promise<BlogPost> {
    const result: BlogPost = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getList(paginationFilter: BlogPostListFilter, fields?: Array<BlogPostFields>): Promise<BlogPostList> {
    const result: BlogPostList = await Repository.getList({
      fields: fields || null,
      filter: paginationFilter || { page: 1 }
    })
    return result
  }
}
