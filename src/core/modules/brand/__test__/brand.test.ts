import { BrandService } from '../BrandService'
import { Brand, BrandFields, BrandList } from '../BrandTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<BrandFields> = ['id', 'name', 'slug']

describe('Brand Module', () => {
  it('Should get single brand by id with all fields successfully', async () => {
    const ID_FILTER = 1260
    const brandResult: Brand = await BrandService.getBrandById(ID_FILTER)
    expect(brandResult.id == ID_FILTER.toString()).toBeTruthy()
  })

  it('Should get single brand by id with selected fields successfully', async () => {
    const ID_FILTER = 1260
    const brandResult: Brand = await BrandService.getBrandById(ID_FILTER, SELECTED_FIELDS)
    const brandResultFields = Object.keys(brandResult).filter(key => key != '__typename')
    expect(brandResultFields).toEqual(SELECTED_FIELDS)
    expect(brandResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get single brand by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'amd'
    const brandResult: Brand = await BrandService.getBrandBySlug(SLUG_FILTER)
    expect(brandResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get brand list with all fields successfully', async () => {
    const brandListResult: BrandList = await BrandService.getBrandList({page: 1, first: 1})
    expect(brandListResult.edges.length > 0).toBeTruthy()
  })
})
