import { LandingPageFields } from './LandingPagesTypes'

export class LandingPagesRepositoryJson {
  static async getById(id: Number, fields?: Array<LandingPageFields>) {
    const landingPages = dc_config.mock?.landing_pages
    const result = landingPages && landingPages.filter(landingPage => landingPage.id == id)
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<LandingPageFields>) {
    const landingPages = dc_config.mock?.landing_pages
    const result = landingPages && landingPages.filter(landingPage => landingPage.slug == slug)
    return result || {}
  }
}
