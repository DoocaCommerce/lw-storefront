import { UserRepository } from './UserRepository'
import { LoginCredentials, User, UserFields } from './UserTypes'

export class UserService {
  static async doLogin(credentials: LoginCredentials, fields?: Array<UserFields>): Promise<User> {
    const result: User = await UserRepository.doLogin({fields: fields || null, credentials: credentials})
    return result
  }
}
