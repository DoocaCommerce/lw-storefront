import { ShowcaseRepositoryGql } from './ShowcaseRepositoryGql'
import { ShowcaseRepositoryJson } from './ShowcaseRepositoryJson'
import { FastSearch, Showcase, ShowcaseFields, ShowcaseList, ShowcasePaginationFilter } from './ShowcaseTypes'

const Repository = dc_config.mock?.showcase ? ShowcaseRepositoryJson : ShowcaseRepositoryGql

export class ShowcaseService {
  static async getShowcaseList(
    showcasePaginationFilter: ShowcasePaginationFilter,
    fields?: Array<ShowcaseFields>
  ): Promise<ShowcaseList> {
    const result: ShowcaseList = await Repository.getShowcaseList({
      fields: fields || null,
      filter: showcasePaginationFilter
    })
    return result
  }

  static async getShowcaseById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getShowcaseById(id, fields)
    return result
  }

  static async getShowcaseBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getShowcaseBySlug(slug, fields)
    return result
  }

  static async getShowcaseByFastSearch(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getShowcaseByFastSearch(fastSearch, fields)
    return result
  }
}
