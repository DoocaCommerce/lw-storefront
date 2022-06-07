import { BrandService } from '../BrandService'
import { Brand, BrandFields, BrandList } from '../BrandTypes'
import { buildBaseAsserts, buildGeneralModuleAsserts } from '../../../helpers/testHelper'
import { PageInfo } from "../../../types/PaginationTypes"
import "isomorphic-fetch"

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
  brandList.forEach(brand => buildGeneralModuleAsserts(brand, referenceObject))
  buildBaseAsserts(brandResult.pageInfo, referencePageInfoObject)
  expect(brandList.length).toEqual(NUMBER_OF_RECORDS)
}

async function buildGetBrandByIdAsserts(referenceObject: unknown, fields?: Array<BrandFields>) {
  const ID_FILTER = 1070
  const brandResult: Brand = await BrandService.getBrandById(ID_FILTER, fields)
  buildGeneralModuleAsserts(brandResult, referenceObject, {id: ID_FILTER}, ID_FILTER)
}

async function buildGetBrandBySlugAsserts(referenceObject: unknown, fields?: Array<BrandFields>) {
  const SLUG_FILTER = 'av-carteiras'
  const brandResult: Brand = await BrandService.getBrandBySlug(SLUG_FILTER, fields)
  buildGeneralModuleAsserts(brandResult, referenceObject, {slug: SLUG_FILTER}, SLUG_FILTER)
}

describe('Brand Module', () => {
  it('Get brand by id with all fields', async () => {
    await buildGetBrandByIdAsserts(refereceBrandAllFieldsObject)
  })

  it('Get brand by slug with all fields', async () => {
    await buildGetBrandBySlugAsserts(refereceBrandAllFieldsObject)
  })

  it('Get brand by id with selected fields', async () => {
    await buildGetBrandByIdAsserts(refereceBrandSelectedFieldsObject, selectedFields)
  })

  it('Get brand by slug with selected fields', async () => {
    await buildGetBrandBySlugAsserts(refereceBrandSelectedFieldsObject, selectedFields)
  })

  it('Get brand list with all fields', async () => {
    await buildBrandListAsserts(refereceBrandAllFieldsObject)
  })

  it('Get brand list with selected fields', async () => {
    await buildBrandListAsserts(refereceBrandSelectedFieldsObject, selectedFields)
  })
})
