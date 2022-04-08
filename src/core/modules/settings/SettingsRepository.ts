import { client } from '../../services/GraphqlService'

export async function fetchAllSettings(): Promise<Object> {
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

export async function fetchSettings(): Promise<Object> {
  const settingsQuery = `
    query {
      setting {
        shopId
        themeId
        version
        data
      }
    `

  const { setting } = await client.query<any>(settingsQuery)

  const data = JSON.parse(setting.data)

  return { ...setting, data }
}
