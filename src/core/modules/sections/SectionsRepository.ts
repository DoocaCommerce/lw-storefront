import { client } from '../../services/GraphqlService'

export async function fetchSections(): Promise<Object> {
  const settingsQuery = `
    query getSections{
      section {
        data
        page
        version
        theme_id
      }
    }
  `

  const { section } = await client.query(settingsQuery)
  const data = JSON.parse(section.data)

  return { ...section, data }
}
