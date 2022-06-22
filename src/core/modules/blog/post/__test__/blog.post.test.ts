import { BlogPostService } from '../BlogPostService'
import { BlogPostFields } from '../BlogPostTypes'
import 'isomorphic-fetch'

describe('Blog Post Module', () => {
    it('Should get blog post by id with all fields', async () => {
        const ID_FILTER = 3566
        const blogPostResult = await BlogPostService.getBlogPostById(ID_FILTER)
        expect(blogPostResult.id == ID_FILTER).toBeTruthy()
    })

    it('Should get blog post by id with selected fields', async () => {
        const ID_FILTER = 3566
        const SELECTED_FIELDS: Array<BlogPostFields> = ['id', 'name']
        const blogPostResult = await BlogPostService.getBlogPostById(ID_FILTER, SELECTED_FIELDS)
        const blogPostResultResultKeys = Object.keys(blogPostResult).filter(key => key != '__typename')
        expect(blogPostResultResultKeys).toEqual(SELECTED_FIELDS)
        expect(blogPostResultResultKeys.length).toEqual(SELECTED_FIELDS.length)
    })

    it('Should get blog post by slug with all fields', async () => {
        const SLUG_FILTER = 'post-sem-imagem'
        const blogPostResult = await BlogPostService.getBlogPostBySlug(SLUG_FILTER)
        expect(blogPostResult.slug).toEqual(SLUG_FILTER)
    })

    it('Should get blog post list with all fields', async () => {
        const blogPostListResult = await BlogPostService.getBlogPostList({page: 1, first: 1, post_category_id: 1055})
        expect(blogPostListResult.edges.length > 0).toBeTruthy()
    })
})
