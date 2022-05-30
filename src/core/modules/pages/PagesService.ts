import { PagesRepository } from './PagesRepository'
import { Page, PageFields } from './PageTypes'

export class PagesService {
  static async getPageList(fields?: Array<PageFields>): Promise<Array<Page>> {
    const result: Array<Page> = await PagesRepository.getPageList(fields)
    return result
  }

  static async getPageById(id: Number, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await PagesRepository.getPageById(id, fields)
    return result
  }

  static async getPageBySlug(slug: String, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await PagesRepository.getPageBySlug(slug, fields)
    return result
  }
}
