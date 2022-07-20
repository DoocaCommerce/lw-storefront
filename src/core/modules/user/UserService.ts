import { UserRepositoryGql } from './UserRepositoryGql'
import { UserRepositoryJson } from './UserRepositoryJson'
import { LoginCredentials, OptionsGetUser, User, UserFields } from './UserTypes'

const Repository = dc_config.mock?.user ? UserRepositoryJson : UserRepositoryGql

export class UserService {
  static async auth(credentials: LoginCredentials, fields?: Array<UserFields>): Promise<User> {
    const result: User = await Repository.auth({ fields: fields || null, credentials: credentials })
    return result
  }

  static async get(token: string, fields?: Array<UserFields>): Promise<User> {
    const result: User = await Repository.get({ fields: fields || null, token: token })
    return result
  }
}
