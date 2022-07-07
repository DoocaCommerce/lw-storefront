import { SettingsService } from '../SettingsService'
import { Setting, SettingResponse } from '../SettingsTypes'
import { buildBaseAsserts, normalizeMockData } from '../../../helpers/__test__/testHelper'
import settingMock from '../../../mocks/settings/settings.json'
import { Module } from '../../../types/TestMockType'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: (): SettingResponse => settingMock.data } }
})

const refereceSettingObject: Setting<object> = {
  shop_id: 0,
  theme_id: 0,
  version: '',
  page: '',
  data: {}
}

describe('Settings Module', () => {
  it('Get settings', async () => {
    const settingResult: Setting<any> = await SettingsService.getOne()
    const normalizedMock = normalizeMockData(settingMock, Module.setting)
    buildBaseAsserts(settingResult, refereceSettingObject, normalizedMock)
  })
})
