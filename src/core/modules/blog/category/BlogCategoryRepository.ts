import { client } from '../../../services/GraphqlService'
import { BlogCategory, BlogCategoryFields, BlogCategoryListResponse, BlogCategoryResponse, OptionsGetBlogCategory } from './BlogCategoryTypes'

const BLOG_CATEGORY_DEFAULT_FIELDS = [
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

export class BlogCategoryRepository {
    static async getBlogCategoryList(fields?: Array<BlogCategoryFields>): Promise<Array<BlogCategory>> {
        const blogCategoryFields = (fields || BLOG_CATEGORY_DEFAULT_FIELDS).join()

        const blogCategoryListQuery = `
            query BlogCategories {
                blogCategories {
                    ${blogCategoryFields}
                }
            }
            `

        const { blogCategories }: BlogCategoryListResponse = await client.query(blogCategoryListQuery)

        return blogCategories
    }

    private static async getBlogCategory(OptionsGetBlogCategory: OptionsGetBlogCategory): Promise<BlogCategory> {
        const { fields, filter } = OptionsGetBlogCategory

        const blogCategoryFields = (fields || BLOG_CATEGORY_DEFAULT_FIELDS).join()

        const blogCategoryQuery = `
            query BlogCategory($filter: filterBlogCategory) {
                blogCategory(filter: $filter) {
                    ${blogCategoryFields}
                }
            }
            `

        const { blogCategory }: BlogCategoryResponse = await client.query(blogCategoryQuery, filter && {filter: {...filter}})

        return blogCategory
    }

    static async getBlogCategoryById(id: Number, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
        return this.getBlogCategory({fields: fields || null, filter: {id: id}})
    }

    static async getBlogCategoryBySlug(slug: String, fields?: Array<BlogCategoryFields>): Promise<BlogCategory> {
        return this.getBlogCategory({fields: fields || null, filter: {slug: slug}})
    }
}
