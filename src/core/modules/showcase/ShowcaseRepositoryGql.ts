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
  static async getShowcaseList({ fields, filter }: OptionsGetShowcaseList): Promise<ShowcaseList> {
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

  private static async getShowcase({ fields, filter }: OptionsGetShowcase): Promise<Showcase> {
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

  static async getShowcaseById(id: Number, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { id: id } })
  }

  static async getShowcaseBySlug(slug: String, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { slug: slug } })
  }

  static async getShowcaseByFastSearch(fastSearch: FastSearch, fields?: Array<ShowcaseFields>): Promise<Showcase> {
    return this.getShowcase({ fields: fields || null, filter: { fastSearch: fastSearch } })
  }
}
