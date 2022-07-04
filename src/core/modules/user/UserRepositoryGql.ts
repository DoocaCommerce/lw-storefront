import { client } from '../../services/GraphqlService'
import { UserQueries } from './UserQueries'
import { LoginRespose, OptionsDoLogin, User } from './UserTypes'

export class UserRepositoryGql {
  static async doLogin(optionsDoLogin: OptionsDoLogin): Promise<User> {
    const { fields, credentials } = optionsDoLogin
    const userQuery = new UserQueries(fields)
    const doLoginQuery: string = userQuery.doLogin()
    try {
      const { login }: LoginRespose = await client.query(
        doLoginQuery,
        credentials && { credentials: { ...credentials } }
      )

      return login
    } catch (error) {
      throw new Error(error)
    }
  }
}
