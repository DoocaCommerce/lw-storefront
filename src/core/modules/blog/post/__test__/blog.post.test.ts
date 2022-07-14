import { BlogPostService } from '../BlogPostService'
import { BlogPostFields } from '../BlogPostTypes'
import 'isomorphic-fetch'

describe('Blog Post Module', () => {
  it('Should get blog post by id with all fields succeffully', async () => {
    const ID_FILTER = '3566'
    const blogPostResult = await BlogPostService.getById(ID_FILTER)
    expect(blogPostResult.id == Number(ID_FILTER)).toBeTruthy()
  })

  it('Should get blog post by id with selected fields succeffully', async () => {
    const ID_FILTER = '3566'
    const SELECTED_FIELDS: Array<BlogPostFields> = ['id', 'name']
    const blogPostResult = await BlogPostService.getById(ID_FILTER, SELECTED_FIELDS)
    const blogPostResultKeys = Object.keys(blogPostResult).filter(key => key != '__typename')
    expect(blogPostResultKeys).toEqual(SELECTED_FIELDS)
    expect(blogPostResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get blog post by slug with all fields succeffully', async () => {
    const SLUG_FILTER = 'post-sem-imagem'
    const blogPostResult = await BlogPostService.getBySlug(SLUG_FILTER)
    expect(blogPostResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get blog post list with all fields succeffully', async () => {
    const blogPostListResult = await BlogPostService.getList({ page: 1, first: 1, post_category_id: 1055 })
    expect(blogPostListResult.edges.length > 0).toBeTruthy()
  })

  it('Should try to get blog post by inexistant id and it should throw error', async () => {
    const ID_FILTER = '3200'
    expect(async () => await BlogPostService.getById(ID_FILTER)).rejects.toThrow()
  })
})
