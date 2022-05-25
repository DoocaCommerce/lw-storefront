import "isomorphic-fetch"
import { BrandService } from '../BrandService'
import { Brand, BrandFields } from '../BrandTypes'
import { buildBaseAsserts } from '../../../helpers/testHelper'
import { PageInfo } from "../../../types/PaginationTypes"

const refereceBrandAllFieldsObject:Brand = {
  id: '',
  hotsite_id: 0,
  external_id: 0,
  name: '',
  slug: '',
  description: '',
  short_description: '',
  image: {src: ''},
  banner: {src: ''},
  meta_title: '',
  meta_keywords: '',
  meta_description: '',
  position: 0,
  url: '',
  active: false,
  created_at: '',
  updated_at: ''
}

const refereceBrandSelectedFieldsObject:Brand = {
  id: '',
  name: '',
  slug: ''
}

const selectedFields: Array<BrandFields> = ['id', 'name', 'slug']

const referencePageInfoObject: PageInfo = {
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: '',
  endCursor: '',
  total: 0
}

async function buildBrandListAsserts(referenceObject: unknown, fields?: Array<BrandFields>) {
  const NUMBER_OF_RECORDS = 3
  const PAGINATION_FILTER = {page: 1, first: NUMBER_OF_RECORDS}
  const brandResult: any = await BrandService.getBrandList(PAGINATION_FILTER, fields)
  const brandList:Array<Brand> = brandResult.edges.map(edge => (edge.node))
  brandList.forEach(brand => buildBrandAsserts(brand, referenceObject))
  buildBaseAsserts(brandResult.pageInfo, referencePageInfoObject)
  expect(brandList.length).toEqual(NUMBER_OF_RECORDS)
}

function buildBrandAsserts(brandResult:Brand, refereceBrandObject: unknown, filter?: unknown, filterValue?: any) {
  buildBaseAsserts(brandResult, refereceBrandObject)
  if (filter) {
    const filterKey = Object.keys(filter)[0]
    expect(brandResult[filterKey] == filterValue).toBeTruthy()
  }
}

describe('Brand Module', () => {
  it('Get brand by id with all fields', async () => {
    const ID_FILTER = 1070
    const brandResult: Brand = await BrandService.getBrandById(ID_FILTER)
    buildBrandAsserts(brandResult, refereceBrandAllFieldsObject, {id: ID_FILTER}, ID_FILTER)
  })

  it('Get brand by slug with all fields', async () => {
    const SLUG_FILTER = 'av-carteiras'
    const brandResult: Brand = await BrandService.getBrandBySlug(SLUG_FILTER)
    buildBrandAsserts(brandResult, refereceBrandAllFieldsObject, {slug: SLUG_FILTER}, SLUG_FILTER)
  })

  it('Get brand by id with selected fields', async () => {
    const ID_FILTER = 1070
    const brandResult: Brand = await BrandService.getBrandById(ID_FILTER, selectedFields)
    buildBrandAsserts(brandResult, refereceBrandSelectedFieldsObject, {id: ID_FILTER}, ID_FILTER)
  })

  it('Get brand by slug with selected fields', async () => {
    const SLUG_FILTER = 'av-carteiras'
    const brandResult: Brand = await BrandService.getBrandBySlug(SLUG_FILTER, selectedFields)
    buildBrandAsserts(brandResult, refereceBrandSelectedFieldsObject, {slug: SLUG_FILTER}, SLUG_FILTER)
  })

  it('Get brand list with all fields', async () => {
    await buildBrandListAsserts(refereceBrandAllFieldsObject)
  })

  it('Get brand list with selected fields', async () => {
    await buildBrandListAsserts(refereceBrandSelectedFieldsObject, selectedFields)
  })
})
