import { AppsRepositoryJson } from './AppsRepositoryJson'
import { AppsRepositoryGql } from './AppsRepositoryGql'
import { Apps, AppsFields } from './AppsTypes'

const Repository = dc_config.mock?.apps ? AppsRepositoryJson : AppsRepositoryGql

export class AppsService {
  static async getAppsById(id: Number, fields?: Array<AppsFields>) {
    const result: Apps = await Repository.getAppsById(id, fields)
    return result
  }
}
