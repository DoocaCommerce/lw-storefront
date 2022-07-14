import { LandingPagesRepositoryGql } from './LandingPagesRepositoryGql'
import { LandingPagesRepositoryJson } from './LandingPagesRepositoryJson'
import { LandingPage, LandingPageFields } from './LandingPagesTypes'

const Repository = dc_config.mock?.landing_pages ? LandingPagesRepositoryJson : LandingPagesRepositoryGql

export class LandingPagesService {
  static async getById(id: string, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    const result: LandingPage<any> = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    const result: LandingPage<any> = await Repository.getBySlug(slug, fields)
    return result
  }
}
