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
      filter: showcasePaginationFilter || { page: 1 }
    })
    return result
  }

  static async getById(id: string, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.getBySlug(slug, fields)
    return result
  }

  static async search(queryString: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    const result: Showcase = await Repository.search(queryString, fields)
    return result
  }
}
