import { client } from '../../services/GraphqlService'
import { UserQueries } from './UserQueries'
import { LoginRespose, OptionsDoLogin, OptionsGetUser, User, UserResponse } from './UserTypes'

export class UserRepositoryGql {
  static async auth({ fields, credentials }: OptionsDoLogin): Promise<User> {
    const userQuery = new UserQueries(fields)
    const doLoginQuery: string = userQuery.auth()
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

  static async get({ token, fields }: OptionsGetUser): Promise<User> {
    const userQuery = new UserQueries(fields)
    const getUserQuery: string = userQuery.get()
    try {
      const { user }: UserResponse = await client.query(getUserQuery, { filter: { user_token: token } })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}
