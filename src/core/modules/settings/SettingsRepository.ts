import { client } from '../../services/GraphqlService'
import { Setting, SettingResponse } from './SettingsTypes'

export class SettingsRepository {
  static async fetchSettings(): Promise<Setting> {
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
