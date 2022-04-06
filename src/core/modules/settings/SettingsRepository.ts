import { gql, query } from '../../services/GraphqlService'

export class SettingsRepository {
  static async fetchAllSettings(): Promise<Object> {
    const settingsQuery = gql`
      query {
        settings {
          settings
          sections
        }
      }
    `

    const { settings } = await query(settingsQuery)
    const sectionsParsed = JSON.parse(settings.sections)
    const settingsParsed = JSON.parse(settings.settings)

    return { sections: sectionsParsed, settings: settingsParsed }
  }

  static async fetchSettings(): Promise<Object> {
    const settingsQuery = gql`
      query {
        settings {
          settings
        }
      }
    `

    const { settings } = await query(settingsQuery)
    return JSON.parse(settings.settings)
  }
}
