import { LandingPagesRepository } from './LandingPagesRepository'
import { LandingPage, LandingPageFields } from './LandingPagesTypes';

export class LandingPagesService {
    static async getLandingPageById(id: Number, fields?: Array<LandingPageFields>): Promise<LandingPage> {
        const result: LandingPage = await LandingPagesRepository.getLandingPageById(id, fields)
        return result
    }

    static async getLandingPageBySlug(slug: String, fields?: Array<LandingPageFields>): Promise<LandingPage> {
        const result: LandingPage = await LandingPagesRepository.getLandingPageBySlug(slug, fields)
        return result
    }
}