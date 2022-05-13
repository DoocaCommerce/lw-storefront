import { SettingsService } from '../SettingsService'
import { Setting, SettingResponse } from '../SettingsTypes'
import settingMock from '../../../mocks/settings/settings.json'

jest.mock('../../../services/GraphqlService', () => {
  return { client: { query: ():SettingResponse => (settingMock.data) } }
})

function normalizeMockData() {
  const data = JSON.parse(settingMock.data.setting.data)
  return { ...settingMock.data.setting, data }
}

describe('Settings Module', () => {
  it('Get settings', async () => {
    const settingResult:Setting = await SettingsService.getSettings()
    expect(settingResult).toMatchObject(normalizeMockData())
  })
})
