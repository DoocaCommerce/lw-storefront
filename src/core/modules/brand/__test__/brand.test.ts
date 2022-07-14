import { BrandService } from '../BrandService'
import { Brand, BrandFields } from '../BrandTypes'
import { buildBaseAsserts, buildGeneralModuleAsserts } from '../../../helpers/__test__/testHelper'
import { PageInfo } from '../../../types/PaginationTypes'
import 'isomorphic-fetch'

const ID_FILTER = '1260'

describe('Brand Module', () => {
  it('Should get brand by id with all fields succeffully', async () => {
    const brandResult = await BrandService.getById(ID_FILTER)
    expect(brandResult.id).toEqual(ID_FILTER.toString())
  })

  it('Should get brand by id with selected fields succeffully', async () => {
    const SELECTED_FIELDS: Array<BrandFields> = ['id', 'name', 'slug']
    const brandResult = await BrandService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const brandResultFields = Object.keys(brandResult).filter(key => key != '__typename')
    expect(brandResultFields).toEqual(SELECTED_FIELDS)
    expect(brandResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get brand by slug with all fields succeffully', async () => {
    const FILTER_SLUG = 'amd'
    const brandResult = await BrandService.getBySlug(FILTER_SLUG)
    expect(brandResult.slug).toEqual(FILTER_SLUG)
  })

  it('Should get brand list with all fields succeffully', async () => {
    const PAGINATION_FILTER = { page: 1, first: 1 }
    const brandListResult = await BrandService.getList(PAGINATION_FILTER)
    expect(brandListResult.edges.length > 0).toBeTruthy()
  })

  it('Should try get brand by inexistant id and it should throw error', async () => {
    expect(async () => await BrandService.getById('1234')).rejects.toThrow()
  })

  it('Should try get brand by inexistant id and it should throw error', async () => {
    console.log(await BrandService.getList(undefined, ['id']))
  })
})
