import { client } from '../../services/GraphqlService'
import { ShowcaseQueries } from './ShowcaseQueries'
import {
  FastSearch,
  OptionsGetShowcase,
  OptionsGetShowcaseList,
  Showcase,
  ShowcaseFields,
  ShowcaseList,
  ShowcaseListResponse,
  ShowcaseResponse
} from './ShowcaseTypes'

export class ShowcaseRepositoryGql {
  static async getList({ fields, filter }: OptionsGetShowcaseList): Promise<ShowcaseList> {
    const showcaseQuery = new ShowcaseQueries(fields)
    const showcaseListQuery: string = showcaseQuery.listFullQuery()

    try {
      const { showcases }: ShowcaseListResponse = await client.query(
        showcaseListQuery,
        filter && { filter: { ...filter } }
      )

      return showcases
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getOne({ fields, filter }: OptionsGetShowcase): Promise<Showcase> {
    const showcaseQuery = new ShowcaseQueries(fields)
    const showcaseGetOneQuery: string = showcaseQuery.getOnefullQuery()

    try {
      const { showcase }: ShowcaseResponse = await client.query(
        showcaseGetOneQuery,
        filter && { filter: { ...filter } }
      )

      return showcase
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }

  static async search(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getOne({ fields: fields || null, filter: { fastSearch: fastSearch } })
  }
}
