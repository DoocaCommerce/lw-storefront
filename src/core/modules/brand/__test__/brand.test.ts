import "isomorphic-fetch"
import { BrandService } from '../BrandService'
import { Brand, BrandFields } from '../BrandTypes'
import { buildBaseAsserts } from '../../../helpers/testHelper'

const refereceBrandAllFieldsObject:Brand = {
  id: '',
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

const refereceBrandSelectedFieldsObject:Brand = {
  id: '',
  name: '',
  slug: ''
}

const selectedFields: Array<BrandFields> = ['id', 'name', 'slug']

function buildBrandAsserts(brandResult:Brand, refereceBrandObject: unknown, filter?: unknown, filterValue?: any) {
  buildBaseAsserts(brandResult, refereceBrandObject)
  if (filter) {
    const filterKey = Object.keys(filter)[0]
    expect(brandResult[filterKey] == filterValue).toBeTruthy()
  }
}

describe('Brand Module', () => {
  it('Get brand by id with all fields', async () => {
    const BRAND_ID_FILTER = 1070
    const brandResult: Brand = await BrandService.getBrandById(BRAND_ID_FILTER)
    buildBrandAsserts(brandResult, refereceBrandAllFieldsObject, {id: BRAND_ID_FILTER}, BRAND_ID_FILTER)
  })

  it('Get brand by slug with all fields', async () => {
    const BRAND_SLUG_FILTER = 'av-carteiras'
    const brandResult: Brand = await BrandService.getBrandBySlug(BRAND_SLUG_FILTER)
    buildBrandAsserts(brandResult, refereceBrandAllFieldsObject, {slug: BRAND_SLUG_FILTER}, BRAND_SLUG_FILTER)
  })

  it('Get brand by id with selected fields', async () => {
    const BRAND_ID_FILTER = 1070
    const brandResult: Brand = await BrandService.getBrandById(BRAND_ID_FILTER, selectedFields)
    buildBrandAsserts(brandResult, refereceBrandSelectedFieldsObject, {id: BRAND_ID_FILTER}, BRAND_ID_FILTER)
  })

  it('Get brand by slug with selected fields', async () => {
    const BRAND_SLUG_FILTER = 'av-carteiras'
    const brandResult: Brand = await BrandService.getBrandBySlug(BRAND_SLUG_FILTER, selectedFields)
    buildBrandAsserts(brandResult, refereceBrandSelectedFieldsObject, {slug: BRAND_SLUG_FILTER}, BRAND_SLUG_FILTER)
  })
})
