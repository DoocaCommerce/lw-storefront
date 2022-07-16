import { OptionsDoLogin, OptionsGetUser } from './UserTypes'

export class UserRepositoryJson {
  static async doLogin(optionsDoLogin: OptionsDoLogin) {
    const result = dc_config.mock?.user

    return result || {}
  }

  static async getUser(optionsGetUser: OptionsGetUser) {
    const result = dc_config.mock?.user

    return result || {}
  }
}
