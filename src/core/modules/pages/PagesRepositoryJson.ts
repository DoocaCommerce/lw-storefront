import { PageFields } from './PageTypes'

export class PagesRepositoryJson {
  static async getList(fields?: Array<PageFields>) {
    const result = dc_config.mock?.pages
    return result || {}
  }

  static async getById(id: Number, fields?: Array<PageFields>) {
    const pages = dc_config.mock?.pages
    const result = pages && pages.filter(page => page.id == id)
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>) {
    const pages = dc_config.mock?.pages
    const result = pages && pages.filter(page => page.slug == slug)
    return result || {}
  }
}
