import { BlogPostRepository } from './BlogPostRepository'
import { BlogPost, BlogPostFields } from './BlogPostTypes'

export class BlogPostService {
    static async getBlogPostById(id: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        const result: BlogPost = await BlogPostRepository.getBlogPostById(id, fields)
        return result
    }

    static async getBlogPostBySlug(slug: String, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        const result: BlogPost = await BlogPostRepository.getBlogPostBySlug(slug, fields)
        return result
    }

    static async getBlogPostByPostCategoryId(postCategoryId: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        const result: BlogPost = await BlogPostRepository.getBlogPostByPostCategoryId(postCategoryId, fields)
        return result
    }

    static async getBlogPostList(fields?: Array<BlogPostFields>): Promise<Array<BlogPost>> {
        const result: Array<BlogPost> = await BlogPostRepository.getBlogPostList(fields)
        return result
    }
}