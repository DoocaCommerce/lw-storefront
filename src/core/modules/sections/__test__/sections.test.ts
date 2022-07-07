import { SectionsService } from '../SectionsService'
import { Section, SectionFilter, SectionResponse } from '../SectionsTypes'
import { buildBaseAsserts, normalizeMockData } from '../../../helpers/__test__/testHelper'
import sectionMock from '../../../mocks/sections/sections.json'
import sectionPageFilterMock from '../../../mocks/sections/sections.page.json'
import sectionVersionFilterMock from '../../../mocks/sections/sections.version.json'
import sectionThemeIdFilterMock from '../../../mocks/sections/sections.theme_id.json'
import { Module } from '../../../types/TestMockType'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: (query, filter?): SectionResponse => getMock(filter).data } }
})

const mockSelector = {
  page: sectionPageFilterMock,
  theme_id: sectionThemeIdFilterMock,
  version: sectionVersionFilterMock
}

const refereceSettingObject: Section<object> = {
  shop_id: 0,
  theme_id: 0,
  version: '',
  page: '',
  data: {}
}

function getMock(filter?: { filter: SectionFilter }) {
  const filterKey = filter && Object.keys(filter.filter)[0]
  return !filterKey ? sectionMock : mockSelector[filterKey]
}

async function buildSectionAsserts(filter?: unknown, filterValue?: any) {
  const sectionResult: Section<any> = await SectionsService.getOne(filter)
  const mock = getMock(filter && { filter: filter })
  const normalizedMock = normalizeMockData(mock, Module.section)

  buildBaseAsserts(sectionResult, refereceSettingObject, normalizedMock)

  if (filter) {
    const filterKey = Object.keys(filter)[0]
    expect(sectionResult[filterKey]).toEqual(filterValue)
  }
}

describe('Sections Module', () => {
  it('Get sections with no filter', async () => {
    await buildSectionAsserts()
  })

  it('Get sections with page filter', async () => {
    const PAGE_FILTER = 'products'
    const filter: SectionFilter = { page: PAGE_FILTER }
    await buildSectionAsserts(filter, PAGE_FILTER)
  })

  it('Get sections with theme_id filter', async () => {
    const THEME_FILTER = 3
    const filter: SectionFilter = { theme_id: THEME_FILTER }
    await buildSectionAsserts(filter, THEME_FILTER)
  })

  it('Get sections with version filter', async () => {
    const VERSION_FILTER = '2'
    const filter: SectionFilter = { version: VERSION_FILTER }
    await buildSectionAsserts(filter, VERSION_FILTER)
  })
})
