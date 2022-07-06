import { ShowcaseRepositoryGql } from './ShowcaseRepositoryGql'
import { ShowcaseRepositoryJson } from './ShowcaseRepositoryJson'
import { FastSearch, Showcase, ShowcaseFields, ShowcaseList, ShowcasePaginationFilter } from './ShowcaseTypes'

const Repository = dc_config.mock?.showcase ? ShowcaseRepositoryJson : ShowcaseRepositoryGql

export class ShowcaseService {
  static async getList(
    showcasePaginationFilter: ShowcasePaginationFilter,
    fields?: Array<ShowcaseFields>
  ): Promise<ShowcaseList> {
    const result: ShowcaseList = await Repository.getList({
      fields: fields || null,
      filter: showcasePaginationFilter
    })
    return result
  }

  static async getById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getById(id, fields)
    return result
  }

  static async getBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getBySlug(slug, fields)
    return result
  }

  static async search(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.search(fastSearch, fields)
    return result
  }
}
