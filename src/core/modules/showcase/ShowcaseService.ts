import { ShowcaseRepository } from './ShowcaseRepository'
import { FastSearch, Showcase, ShowcaseFields, ShowcaseList, ShowcasePaginationFilter } from './ShowcaseTypes'

export class ShowcaseService {
  static async getShowcaseList(
    showcasePaginationFilter: ShowcasePaginationFilter,
    fields?: Array<ShowcaseFields>
  ): Promise<ShowcaseList> {
    const result: ShowcaseList = await ShowcaseRepository.getShowcaseList({
      fields: fields || null,
      filter: showcasePaginationFilter
    })
    return result
  }

  static async getShowcaseById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await ShowcaseRepository.getShowcaseById(id, fields)
    return result
  }

  static async getShowcaseBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await ShowcaseRepository.getShowcaseBySlug(slug, fields)
    return result
  }

  static async getShowcaseByFastSearch(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await ShowcaseRepository.getShowcaseByFastSearch(fastSearch, fields)
    return result
  }
}
