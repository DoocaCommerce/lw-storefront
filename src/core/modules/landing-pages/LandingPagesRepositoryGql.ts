import { client } from '../../services/GraphqlService'
import { LandingPagesQueries } from './LandingPagesQueries'
import { LandingPage, LandingPageFields, LandingPageResponse, OptionsGetLandingPage } from './LandingPagesTypes'

export class LandingPagesRepositoryGql {
  private static async get({ fields, filter }: OptionsGetLandingPage): Promise<LandingPage<any>> {
    const landingPagesQuery = new LandingPagesQueries(fields)
    const landingPagesGetQuery: string = landingPagesQuery.getOnefullQuery()
    try {
      const { landingPage }: LandingPageResponse = await client.query(
        landingPagesGetQuery,
        filter && { filter: { ...filter } }
      )

      const content = landingPage.content && JSON.parse(landingPage.content)

      return { ...landingPage, ...(content && { content: content }) }
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    return this.get({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    return this.get({ fields: fields || null, filter: { slug: slug } })
  }
}
