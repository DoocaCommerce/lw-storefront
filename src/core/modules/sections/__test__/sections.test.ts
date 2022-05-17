import { SectionsService } from '../SectionsService'
import { Section, SectionFilter, SectionResponse } from '../SectionsTypes'
import { normalizeMockData } from '../../../helpers/testHelper'
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

function getMock(filter?: {filter: SectionFilter}) {
  const filterKey = filter && Object.keys(filter.filter)[0]
  return !filterKey ? sectionMock : mockSelector[filterKey]
}

const refereceSettingObject:Section<object> = {
  shop_id: 0,
  theme_id: 0,
  version: "",
  page: "",
  data: {}
}

describe('Sections Module', () => {
  it('Get sections with no filter', async () => {
    const sectionResult:Section<any> = await SectionsService.getSections()
    const normalizedMock = normalizeMockData(sectionMock, Module.section)
    Object.keys(sectionResult).forEach((key) => {
      expect(sectionResult[key]).toEqual(normalizedMock[key])
      expect(typeof sectionResult[key]).toEqual(typeof refereceSettingObject[key])
    })
  })

  it('Get sections with page filter', async () => {
    const PAGE_FILTER = 'products'
    const filter: SectionFilter = { page: PAGE_FILTER } 
    const sectionResult:Section<any> = await SectionsService.getSections(filter)
    const normalizedMock = normalizeMockData(sectionPageFilterMock, Module.section)
    Object.keys(sectionResult).forEach((key) => {
      expect(sectionResult[key]).toEqual(normalizedMock[key])
      expect(typeof sectionResult[key]).toEqual(typeof refereceSettingObject[key])
    })
    expect(sectionResult.page).toEqual(PAGE_FILTER)
  })

  it('Get sections with theme_id filter', async () => {
    const THEME_FILTER = 3
    const filter: SectionFilter = { theme_id: THEME_FILTER } 
    const sectionResult:Section<any> = await SectionsService.getSections(filter)
    const normalizedMock = normalizeMockData(sectionThemeIdFilterMock, Module.section)
    Object.keys(sectionResult).forEach((key) => {
      expect(sectionResult[key]).toEqual(normalizedMock[key])
      expect(typeof sectionResult[key]).toEqual(typeof refereceSettingObject[key])
    })
    expect(sectionResult.theme_id).toEqual(THEME_FILTER)
  })

  it('Get sections with version filter', async () => {
    const VERSION_FILTER = '2'
    const filter: SectionFilter = { version: VERSION_FILTER } 
    const sectionResult:Section<any> = await SectionsService.getSections(filter)
    const normalizedMock = normalizeMockData(sectionVersionFilterMock, Module.section)
    Object.keys(sectionResult).forEach((key) => {
      expect(sectionResult[key]).toEqual(normalizedMock[key])
      expect(typeof sectionResult[key]).toEqual(typeof refereceSettingObject[key])
    })
    expect(sectionResult.version).toEqual(VERSION_FILTER)
  })
})