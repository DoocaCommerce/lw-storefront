import { client } from '../../services/GraphqlService'
import { LandingPage, LandingPageFields, LandingPageResponse, OptionsGetLandingPage } from './LandingPagesTypes'

const LANDING_PAGE_DEFAULT_FIELDS = [
    'shop_id',
    'id',
    'name',
    'content',
    'slug',
    'not_index',
    'active',
    'url',
    'created_at',
    'updated_at',
    'meta_title',
    'meta_description',
    'meta_keywords'
]

export class LandingPagesRepository {
    private static async getLandingPage(optionsGetLandingPage: OptionsGetLandingPage): Promise<LandingPage> {
        const { fields, filter } = optionsGetLandingPage

        const landingPageQueryFields = (fields || LANDING_PAGE_DEFAULT_FIELDS).join()

        const landingPageQuery = `
            query LandingPage($filter: filter) {
                landingPage(filter: $filter) {
                    ${landingPageQueryFields}
                }
            }
        `

        const { landingPage }: LandingPageResponse = await client.query(landingPageQuery, filter && {filter: {...filter}})

        return landingPage
    }

    static async getLandingPageById(id: Number, fields?: Array<LandingPageFields>): Promise<LandingPage> {
        return this.getLandingPage({fields: fields || null, filter: {id: id}})
    }

    static async getLandingPageBySlug(slug: String, fields?: Array<LandingPageFields>): Promise<LandingPage> {
        return this.getLandingPage({fields: fields || null, filter: {slug: slug}})
    }
}