import { Section, SectionFilter } from './SectionsTypes'

export class SectionsRepositoryGql {
  static async fetchSections(filter?: SectionFilter): Promise<Section<unknown>> {
    const result = dc_config.mock?.sections

    return result || {}
  }
}
