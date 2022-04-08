import { client } from '../../services/GraphqlService'

export class SettingsRepository {
  static async fetchAllSettings(): Promise<Object> {
    const settingsQuery = `
    query {
      settings {
        settings
        sections
      }
    `

    const { settings } = await client.query(settingsQuery)
    const sectionsParse = JSON.parse(settings.sections)
    const settingsParse = JSON.parse(settings.settings)

    return { sections: sectionsParse, settings: settingsParse }
  }

  static async fetchSettings(): Promise<Object> {
    const settingsQuery = `
    query Setting {
      setting {
        data
        page
        shopId
        themeId
        version
      }
    }
    `

    const { setting } = await client.query<any>(settingsQuery)

    const data = JSON.parse(setting.data)

    return { ...setting, data }
  }
}
