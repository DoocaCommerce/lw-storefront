import SettingsService from '../SettingsService'
import fetchMock from 'jest-fetch-mock'
global.fetch = fetchMock
// fetchMock.enableMocks()

describe('Settings Service', () => {
  it('Get settings', async () => {
    const result = await SettingsService.get()

    expect(result[0]).toMatchObject({ name: 'opaa' })
  })
})
