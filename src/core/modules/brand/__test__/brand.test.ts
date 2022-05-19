import { BrandService } from '../BrandService'
import { Brand, BrandFilter, BrandResponse } from '../BrandTypes'
import { buildBaseAsserts } from '../../../helpers/testHelper'
import brandMock from '../../../mocks/brand/brand.json'
import brandIdFIlterMock from '../../../mocks/brand/brand.id.json'
import sectionbrandSlugFilterMock from '../../../mocks/brand/brand.slug.json'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: (query, filter?):BrandResponse => (getMock(filter).data) } }
})

const mockSelector = {
  id: brandIdFIlterMock,
  slug: sectionbrandSlugFilterMock,
}

const refereceBrandObject:Brand = {
  id: 0,
  hotsite_id: 0,
  external_id: 0,
  name: '',
  slug: '',
  description: '',
  short_description: '',
  image: {src: ''},
  banner: '',
  meta_title: '',
  meta_keywords: '',
  meta_description: '',
  position: 0,
  url: '',
  active: false,
  created_at: '',
  updated_at: ''
}

function getMock(filter?: {filter: BrandFilter}) {
  const filterKey = filter && Object.keys(filter.filter)[0]
  return !filterKey ? brandMock : mockSelector[filterKey]
}

function buildBrandAsserts(brandResult:Brand[], filter?: unknown, filterValue?: any) {
  const mock = getMock(filter && {filter: filter}).data.brand

  buildBaseAsserts(brandResult, mock, refereceBrandObject)
  
  if (filter) {
    const filterKey = Object.keys(filter)[0]
    expect(brandResult[filterKey]).toEqual(filterValue)
  }
}

describe('Brand Module', () => {
  it('Get brands with no filter', async () => {
    const brandResult:Brand[] = await BrandService.getBrands()
    buildBrandAsserts(brandResult)
  })

  it('Get brands by id', async () => {
    const BRAND_ID_FILTER = 1090
    const brandResult:Brand[] = await BrandService.getBrandsById(BRAND_ID_FILTER)
    buildBrandAsserts(brandResult, {id: BRAND_ID_FILTER}, BRAND_ID_FILTER)
  })

  it('Get brands by slug', async () => {
    const SLUG_FILTER = "av-bolsas"
    const brandResult:Brand[] = await BrandService.getBrandsBySlug(SLUG_FILTER)
    buildBrandAsserts(brandResult, {slug: SLUG_FILTER}, SLUG_FILTER)
  })
})
