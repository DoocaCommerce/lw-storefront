import { OptionsGetPage, Page, PageFields, PageListResponse, PageResponse } from './PageTypes'
import { client } from '../../services/GraphqlService'
import { PagesQueries } from './PagesQueries'

export class PagesRepositoryGql {
  static async getList(fields?: Array<PageFields>): Promise<Array<Page>> {
    const pagesQuery = new PagesQueries(fields)
    const pagesListQuery: string = pagesQuery.listFullQuery()
    try {
      const { pages }: PageListResponse = await client.query(pagesListQuery)

      return pages
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getOne({ fields, filter }: OptionsGetPage): Promise<Page> {
    const pagesQuery = new PagesQueries(fields)
    const pagesGetOneQuery: string = pagesQuery.getOnefullQuery()
    try {
      const { pageBy }: PageResponse = await client.query(pagesGetOneQuery, filter && { filter: filter })

      return pageBy
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<PageFields>): Promise<Page> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>): Promise<Page> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
