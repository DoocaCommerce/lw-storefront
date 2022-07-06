import { client } from '../../services/GraphqlService'
import { SectionsQueries } from './SectionsQueries'
import { Section, SectionFilter, SectionResponse } from './SectionsTypes'

export class SectionsRepositoryGql {
  static async getOne(filter?: SectionFilter): Promise<Section<unknown>> {
    const settingsQuery = new SectionsQueries()
    const settingsGetOneQuery: string = settingsQuery.getOnefullQuery()

    try {
      const { section }: SectionResponse = await client.query(settingsGetOneQuery, filter && { filter: { ...filter } })

      const data = JSON.parse(section.data)

      return { ...section, data }
    } catch (error) {
      throw new Error(error)
    }
  }
}
