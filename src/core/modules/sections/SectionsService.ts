import { SectionsRepositoryGql } from './SectionsRepositoryGql'
import { SectionsRepositoryJson } from './SectionsRepositoryJson'
import { Section, SectionFilter } from './SectionsTypes'

const Repository = dc_config.mock?.sections ? SectionsRepositoryJson : SectionsRepositoryGql

export class SectionsService {
  static async getSections(filter?: SectionFilter) {
    const result: Section<unknown> = await Repository.fetchSections(filter)
    return result
  }
}
