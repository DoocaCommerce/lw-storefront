import { BlogPostService } from '../BlogPostService'
import { BlogPostFields } from '../BlogPostTypes'

describe('Blog Post Module', () => {
    it('Should get blog post by id with all fields', async () => {
        const ID_FILTER = 0
        const blogPostResult = await BlogPostService.getBlogPostById(ID_FILTER)
        expect(blogPostResult.id).toEqual(ID_FILTER)
    })

    it('Should get blog post by id with selected fields', async () => {
        const ID_FILTER = 0
        const SELECTED_FIELDS: Array<BlogPostFields> = ['id', 'name']
        const blogPostResult = await BlogPostService.getBlogPostById(ID_FILTER, SELECTED_FIELDS)
        const blogPostResultResultFields = Object.keys(blogPostResult)
        expect(blogPostResultResultFields).toEqual(SELECTED_FIELDS)
        expect(blogPostResultResultFields.length).toEqual(SELECTED_FIELDS.length)
    })

    it('Should get blog post by slug with all fields', async () => {
        const SLUG_FILTER = 'slug'
        const blogPostResult = await BlogPostService.getBlogPostBySlug(SLUG_FILTER)
        expect(blogPostResult.slug).toEqual(SLUG_FILTER)
    })

    it('Should get blog post by post_category_id with all fields', async () => {
        const POST_CATEGORY_ID_FILTER = 0
        const blogPostResult = await BlogPostService.getBlogPostByPostCategoryId(POST_CATEGORY_ID_FILTER)
        expect(blogPostResult.post_category_id).toEqual(POST_CATEGORY_ID_FILTER)
    })

    it('Should get blog post list with all fields', async () => {
        const blogPostListResult = await BlogPostService.getBlogPostList()
        expect(blogPostListResult.length > 0).toBeTruthy()
    })
})