import { gql, query } from '../../services/GraphqlService'

export async function fetchSections(): Promise<Object> {
  const settingsQuery = gql`
    query {
      settings {
        sections
      }
    }
  `

  const { settings } = await query(settingsQuery)
  return JSON.parse(settings.sections)
}
