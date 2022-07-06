import { LandingPagesRepositoryGql } from './LandingPagesRepositoryGql'
import { LandingPagesRepositoryJson } from './LandingPagesRepositoryJson'
import { LandingPage, LandingPageFields } from './LandingPagesTypes'

const Repository = dc_config.mock?.landing_pages ? LandingPagesRepositoryJson : LandingPagesRepositoryGql

export class LandingPagesService {
  static async getById(id: Number, fields?: Array<LandingPageFields>): Promise<LandingPage> {
    const result: LandingPage = await Repository.getById(id, fields)
    return result
  }

  static async getBySlug(slug: String, fields?: Array<LandingPageFields>): Promise<LandingPage> {
    const result: LandingPage = await Repository.getBySlug(slug, fields)
    return result
  }
}
