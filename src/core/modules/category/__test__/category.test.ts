import { CategoryService } from '../CategoryService'
import { CategoryFields } from '../CategoryTypes'
import 'isomorphic-fetch'

describe('Category Module', () => {
  it('Should get category by id with all fields succeffully', async () => {
    const ID_FILTER = '1642'
    const categoryResult = await CategoryService.getById(ID_FILTER)
    expect(categoryResult.id).toEqual(ID_FILTER)
  })

  it('Should get category by id with selected fields succeffully', async () => {
    const SELECTED_FIELDS: Array<CategoryFields> = ['id', 'name', 'position', 'depth', 'breadcrumb']
    const ID_FILTER = '1642'
    const categoryResult = await CategoryService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const categoryResultKeys = Object.keys(categoryResult).filter(key => key != '__typename')
    expect(categoryResultKeys).toEqual(SELECTED_FIELDS)
    expect(categoryResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get category by slug with all fields succeffully', async () => {
    const SLUG_FILTER = 'disco-rigido-hdd'
    const categoryResult = await CategoryService.getBySlug(SLUG_FILTER)
    expect(categoryResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get categoryTree by id with selected fields succeffully', async () => {
    const ID_FILTER = '1649'
    const categoryTreeResult = await CategoryService.getTreeById(ID_FILTER)
    expect(categoryTreeResult[0].id).toEqual(ID_FILTER)
  })

  it('Should get categoryTree by slug with selected fields succeffully', async () => {
    const SLUG_FILTER = 'perifericos'
    const categoryTreeResult = await CategoryService.getTreeBySlug(SLUG_FILTER)
    expect(categoryTreeResult[0].slug).toEqual(SLUG_FILTER)
  })

  it('Should try get category by inexistant id and it should throw error', async () => {
    const ID_FILTER = '16'
    expect(async () => await CategoryService.getById(ID_FILTER)).rejects.toThrow()
  })

  it('Should try get categoryTree by inexistant id and it should throw error', async () => {
    const ID_FILTER = '16'
    expect(async () => await CategoryService.getTreeById(ID_FILTER)).rejects.toThrow()
  })
})
