import { SectionsRepositoryGql } from './SectionsRepositoryGql'
import { Section, SectionFilter } from './SectionsTypes'

//@ts-ignore
const Repository = dc_config.mock?.sections ? SectionsRepositoryGql : SectionsRepositoryGql
export class SectionsService {
  static async getSections(filter?: SectionFilter) {
    const result: Section<unknown> = await Repository.fetchSections(filter)
    return result
  }
}
