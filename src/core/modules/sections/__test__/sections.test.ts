import { SectionsService } from '../SectionsService'
import { Section, SectionFilter, SectionResponse } from '../SectionsTypes'
import { getBaseAsserts, normalizeMockData } from '../../../helpers/testHelper'
import sectionMock from '../../../mocks/sections/sections.json'
import sectionPageFilterMock from '../../../mocks/sections/sections.page.json'
import sectionVersionFilterMock from '../../../mocks/sections/sections.version.json'
import sectionThemeIdFilterMock from '../../../mocks/sections/sections.theme_id.json'
import { Module } from '../../../types/TestMockType'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: (query, filter?):SectionResponse => (getMock(filter).data) } }
})

const mockSelector = {
  page: sectionPageFilterMock,
  theme_id: sectionThemeIdFilterMock,
  version: sectionVersionFilterMock
}

const refereceSettingObject:Section<object> = {
  shop_id: 0,
  theme_id: 0,
  version: "",
  page: "",
  data: {}
}

function getMock(filter?: {filter: SectionFilter}) {
  const filterKey = filter && Object.keys(filter.filter)[0]
  return !filterKey ? sectionMock : mockSelector[filterKey]
}

async function executeTests(filter?: unknown, filterValue?: any) {
  const sectionResult:Section<any> = await SectionsService.getSections(filter)
  const mock = getMock(filter && {filter: filter})
  const normalizedMock = normalizeMockData(mock, Module.section)
  
  getBaseAsserts(sectionResult, normalizedMock, refereceSettingObject)
  
  if (filter) {
    const filterKey = Object.keys(filter)[0]
    expect(sectionResult[filterKey]).toEqual(filterValue)
  }
}

describe('Sections Module', () => {
  it('Get sections with no filter', async () => {
    await executeTests()
  })

  it('Get sections with page filter', async () => {
    const PAGE_FILTER = 'products'
    const filter: SectionFilter = { page: PAGE_FILTER } 
    await executeTests(filter, PAGE_FILTER)
  })

  it('Get sections with theme_id filter', async () => {
    const THEME_FILTER = 3
    const filter: SectionFilter = { theme_id: THEME_FILTER } 
    await executeTests(filter, THEME_FILTER)
  })

  it('Get sections with version filter', async () => {
    const VERSION_FILTER = '2'
    const filter: SectionFilter = { version: VERSION_FILTER } 
    await executeTests(filter, VERSION_FILTER)
  })
})
