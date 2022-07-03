import { AppsFields } from './AppsTypes'

export class AppsRepositoryJson {
  static async getAppsById(id: Number, fields?: Array<AppsFields>) {
    //@ts-ignore
    const mock = dc_config.mock?.apps

    const result = mock && mock.filter(app => app.id == id)

    return result || {}
  }
}
