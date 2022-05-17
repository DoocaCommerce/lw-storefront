import { SectionsRepository } from './SectionsRepository'
import { Section, SectionFilter } from './SectionsTypes'

export class SectionsService {
  static async getSections(filter?: SectionFilter) {
    const result:Section<unknown> = await SectionsRepository.fetchSections(filter)
    return result
  }
}
