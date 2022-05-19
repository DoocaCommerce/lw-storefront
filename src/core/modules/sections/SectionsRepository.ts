import { client } from '../../services/GraphqlService'
import { Section, SectionFilter, SectionResponse } from './SectionsTypes'

export class SectionsRepository {
  static async fetchSections(filter?: SectionFilter): Promise<Section<unknown>> {
    const settingsQuery = `
      query getSections($filter: filterSection){
        section(filter: $filter){
          data
          page
          version
          theme_id
      }
    }
  `

    const { section }:SectionResponse = await client.query(settingsQuery, filter &&  {filter: {...filter}})
    
    const data = JSON.parse(section.data)
  
    return { ...section, data }
  }
}
