import { SettingsService } from '../SettingsService'
import { Setting, SettingResponse } from '../SettingsTypes'
import { normalizeMockData } from '../../../helpers/testHelper'
import settingMock from '../../../mocks/settings/settings.json'
import { Module } from '../../../types/TestMockType'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: ():SettingResponse => (settingMock.data) } }
})

const refereceSettingObject:Setting<object> = {
  shop_id: 0,
  theme_id: 0,
  version: "",
  page: "",
  data: {}
}

describe('Settings Module', () => {
  it('Get settings', async () => {
    const settingResult:Setting<any> = await SettingsService.getSettings()
    const normalizedMock = normalizeMockData(settingMock, Module.setting)
    Object.keys(settingResult).forEach((key) => {
      expect(settingResult[key]).toEqual(normalizedMock[key])
      expect(typeof settingResult[key]).toEqual(typeof refereceSettingObject[key])
    })
  })
})
