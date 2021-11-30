import { gql, query } from '../../services/GraphqlService'

export async function fetchAllSettings(): Promise<Object> {
  const settingsQuery = gql`
    query {
      settings {
        settings
        sections
      }
    }
  `

  const { settings } = await query(settingsQuery)
  const sectionsParse = JSON.parse(settings.sections)
  const settingsParse = JSON.parse(settings.settings)

  return { sections: sectionsParse, settings: settingsParse }
}

export async function fetchSettings(): Promise<Object> {
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
