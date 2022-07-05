import { client } from '../../services/GraphqlService'
import { LandingPagesQueries } from './LandingPagesQueries'
import { LandingPage, LandingPageFields, LandingPageResponse, OptionsGetLandingPage } from './LandingPagesTypes'

export class LandingPagesRepositoryGql {
  private static async get({ fields, filter }: OptionsGetLandingPage): Promise<LandingPage> {
    const landingPagesQuery = new LandingPagesQueries(fields)
    const landingPagesGetQuery: string = landingPagesQuery.getOnefullQuery()
    try {
      const { landingPage }: LandingPageResponse = await client.query(
        landingPagesGetQuery,
        filter && { filter: { ...filter } }
      )

      return landingPage
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<LandingPageFields>): Promise<LandingPage> {
    return this.get({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<LandingPageFields>): Promise<LandingPage> {
    return this.get({ fields: fields || null, filter: { slug: slug } })
  }
}
