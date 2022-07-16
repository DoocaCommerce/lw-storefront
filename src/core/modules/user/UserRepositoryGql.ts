import { client } from '../../services/GraphqlService'
import { UserQueries } from './UserQueries'
import { LoginRespose, OptionsDoLogin, User } from './UserTypes'

export class UserRepositoryGql {
  static async doLogin({ fields, credentials }: OptionsDoLogin): Promise<User> {
    const userQuery = new UserQueries(fields)
    const doLoginQuery: string = userQuery.doLogin()
    try {
      const { login }: LoginRespose = await client.mutation(
        doLoginQuery,
        credentials && { credentials: { ...credentials } }
      )

      return login
    } catch (error) {
      throw new Error(error)
    }
  }
}
