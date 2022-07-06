import { client } from '../../services/GraphqlService'
import { AppsQueries } from './AppsQueries'
import { Apps, AppsFields, AppsResponse } from './AppsTypes'

export class AppsRepositoryGql {
  static async getById(id: Number, fields?: Array<AppsFields>): Promise<Apps> {
    const appsQuery = new AppsQueries(fields)
    const getAppsQuery: string = appsQuery.getApps()
    try {
      const { apps }: AppsResponse = await client.query(getAppsQuery, { filter: { id: id } })

      return apps
    } catch (error) {
      throw new Error(error)
    }
  }
}
