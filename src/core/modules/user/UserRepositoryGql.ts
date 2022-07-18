import { client } from '../../services/GraphqlService'
import { UserQueries } from './UserQueries'
import { LoginRespose, OptionsDoLogin, OptionsGetUser, User, UserResponse } from './UserTypes'

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

  static async getUser({ token, fields }: OptionsGetUser): Promise<User> {
    const userQuery = new UserQueries(fields)
    const getUserQuery: string = userQuery.getUser()
    try {
      const { user }: UserResponse = await client.query(getUserQuery, { filter: { user_token: token } })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}
