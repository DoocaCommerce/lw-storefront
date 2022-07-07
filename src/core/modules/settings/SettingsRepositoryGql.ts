import { client } from '../../services/GraphqlService'
import { SettingsQueries } from './SettingsQueries'
import { SettingResponse } from './SettingsTypes'

export class SettingsRepositoryGql {
  static async getOne() {
    const settingsQuery = new SettingsQueries()
    const settingsGetOneQuery: string = settingsQuery.getOnefullQuery()

    try {
      const { setting } = await client.query<SettingResponse>(settingsGetOneQuery)

      const data = JSON.parse(setting.data)

      return { ...setting, data }
    } catch (error) {
      throw new Error(error)
    }
  }
}
