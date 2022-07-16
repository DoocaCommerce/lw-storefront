import { UserRepositoryGql } from './UserRepositoryGql'
import { UserRepositoryJson } from './UserRepositoryJson'
import { LoginCredentials, OptionsGetUser, User, UserFields } from './UserTypes'

const Repository = dc_config.mock?.user ? UserRepositoryJson : UserRepositoryGql

export class UserService {
  static async doLogin(credentials: LoginCredentials, fields?: Array<UserFields>): Promise<User> {
    const result: User = await Repository.doLogin({ fields: fields || null, credentials: credentials })
    return result
  }

  static async getUser(token: string, fields?: Array<UserFields>): Promise<User> {
    const result: User = await Repository.getUser({ fields: fields || null, token: token })
    return result
  }
}
