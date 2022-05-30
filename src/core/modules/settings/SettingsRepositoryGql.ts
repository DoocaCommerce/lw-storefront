import { client } from '../../services/GraphqlService'
import { Setting, SettingResponse, SettingsRepository } from './SettingsTypes'

export class SettingsRepositoryGql {
  static async fetchSettings() {
    const settingsQuery = `
    query Setting {
      setting {
        shop_id
        theme_id
        version
        page
        data
      }
    }
    `

    const { setting } = await client.query<SettingResponse>(settingsQuery)

    const data = JSON.parse(setting.data)

    return { ...setting, data }
  }
}
