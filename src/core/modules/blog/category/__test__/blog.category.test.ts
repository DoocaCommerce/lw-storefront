import { BlogCategoryService } from '../BlogCategoryService'
import { BlogCategoryFields } from '../BlogCategoryTypes'
import 'isomorphic-fetch'

describe('Blog Category Module', () => {
  it('Should get blog category by id with all fields', async () => {
    const ID_FILTER = 1057
    const blogCategoryResult = await BlogCategoryService.getBlogCategoryById(ID_FILTER)
    expect(blogCategoryResult.id).toEqual(ID_FILTER)
  })

  it('Should get blog category by id with selected fields', async () => {
    const ID_FILTER = 1057
    const SELECTED_FIELDS: Array<BlogCategoryFields> = ['id', 'name']
    const blogCategoryResult = await BlogCategoryService.getBlogCategoryById(ID_FILTER, SELECTED_FIELDS)
    const blogCategoryResultFields = Object.keys(blogCategoryResult).filter(key => key != '__typename')
    expect(blogCategoryResultFields).toEqual(SELECTED_FIELDS)
    expect(blogCategoryResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get blog category by slug with all fields', async () => {
    const SLUG_FILTER = 'categoria-teste-2'
    const blogCategoryResult = await BlogCategoryService.getBlogCategoryBySlug(SLUG_FILTER)
    expect(blogCategoryResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get blog category list with all fields', async () => {
    const blogCategoryListResult = await BlogCategoryService.getBlogCategoryList()
    expect(blogCategoryListResult.length > 0).toBeTruthy()
  })
})
