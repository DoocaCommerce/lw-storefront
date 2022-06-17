import { BlogCategoryService } from '../BlogCategoryService'
import { BlogCategoryFields } from '../BlogCategoryTypes'

describe('Blog Category Module', () => {
    it('Should get blog category by id with all fields', async () => {
        const ID_FILTER = 0
        const blogCategoryResult = await BlogCategoryService.getBlogCategoryById(ID_FILTER)
        expect(blogCategoryResult.id).toEqual(ID_FILTER)
    })

    it('Should get blog category by id with selected fields', async () => {
        const ID_FILTER = 0
        const SELECTED_FIELDS: Array<BlogCategoryFields> = ['id', 'name']
        const blogCategoryResult = await BlogCategoryService.getBlogCategoryById(ID_FILTER, SELECTED_FIELDS)
        const blogCategoryResultFields = Object.keys(blogCategoryResult)
        expect(blogCategoryResultFields).toEqual(SELECTED_FIELDS)
        expect(blogCategoryResultFields.length).toEqual(SELECTED_FIELDS.length)
    })

    it('Should get blog category by slug with all fields', async () => {
        const SLUG_FILTER = 'slug'
        const blogCategoryResult = await BlogCategoryService.getBlogCategoryBySlug(SLUG_FILTER)
        expect(blogCategoryResult.slug).toEqual(SLUG_FILTER)
    })

    it('Should get blog category list with all fields', async () => {
        const blogCategoryListResult = await BlogCategoryService.getBlogCategoryList()
        expect(blogCategoryListResult.length > 0).toBeTruthy()
    })
})