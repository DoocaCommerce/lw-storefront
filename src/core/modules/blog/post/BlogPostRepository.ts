import { client } from '../../../services/GraphqlService'
import { BlogPost, BlogPostFields, BlogPostListResponse, BlogPostResponse, OptionsGetBlogPost } from './BlogPostTypes'

const BLOG_POST_CATEGORY_DEFAULT_FIELDS = [
    'id',
    'name',
    'slug',
    'description',
    'meta_title',
    'meta_description',
    'active',
    'posts_count',
    'position',
    'url',
    'created_at',
    'updated_at'
]

const CATEGORY_FIELD = `category {${BLOG_POST_CATEGORY_DEFAULT_FIELDS.join()}}`

const BLOG_POST_DEFAULT_FIELDS = [
    'id',
    'post_category_id',
    'name',
    'slug',
    'image',
    'description',
    'tags',
    'active',
    'url',
    'meta_title',
    'meta_description',
    'meta_keywords',
    'created_at',
    'updated_at',
    CATEGORY_FIELD
]

export class BlogPostRepository {
    private static replaceBlogPostCategoryFields(fields: Array<String>): Array<String> {
        const indexOfField = fields.indexOf('category')
        const isFieldSelected = indexOfField != -1 
        isFieldSelected && (fields[indexOfField] = CATEGORY_FIELD)
    
        return fields
    }

    static async getBlogPostList(fields?: Array<BlogPostFields>): Promise<Array<BlogPost>> {
        const blogPostFields = (this.replaceBlogPostCategoryFields(fields) || BLOG_POST_DEFAULT_FIELDS).join()

        const blogPostListQuery = `
            query Query($filter: filterBlogPost) {
                blogPosts(filter: $filter) {
                    ${blogPostFields}
                }
            }
            `
        
        const { blogPosts }: BlogPostListResponse = await client.query(blogPostListQuery)

        return blogPosts
    }

    private static async getBlogPost(OptionsGetBlogCategory: OptionsGetBlogPost): Promise<BlogPost> {
        const { fields, filter } = OptionsGetBlogCategory

        const blogPostFields = (this.replaceBlogPostCategoryFields(fields) || BLOG_POST_DEFAULT_FIELDS).join()

        const blogPostListQuery = `
            query BlogPost($filter: filterBlogPost) {
                blogPost(filter: $filter) {
                    ${blogPostFields}
                }
            }
            `
        
        const { blogPost }: BlogPostResponse = await client.query(blogPostListQuery, filter && {filter: {...filter}})

        return blogPost
    }

    static async getBlogPostById(id: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        return this.getBlogPost({fields: fields || null, filter: {id: id}})
    }

    static async getBlogPostBySlug(slug: String, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        return this.getBlogPost({fields: fields || null, filter: {slug: slug}})
    }

    static async getBlogPostByPostCategoryId(postCategoryId: Number, fields?: Array<BlogPostFields>): Promise<BlogPost> {
        return this.getBlogPost({fields: fields || null, filter: {post_category_id: postCategoryId}})
    }
}