import { PagesRepositoryGql } from './PagesRepositoryGql'
import { PagesRepositoryJson } from './PagesRepositoryJson'
import { Page, PageFields } from './PageTypes'

const Repository = dc_config.mock?.pages ? PagesRepositoryJson : PagesRepositoryGql

export class PagesService {
  static async getList(fields?: Array<PageFields>): Promise<Array<Page>> {
    const result: Array<Page> = await Repository.getList(fields)
    return result
  }

  static async getById(id: Number, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await Repository.getById(id, fields)
    return result
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await Repository.getBySlug(slug, fields)
    return result
  }
}
