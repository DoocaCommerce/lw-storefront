import { OptionsDoLogin } from './UserTypes'

export class UserRepositoryJson {
  static async doLogin(optionsDoLogin: OptionsDoLogin) {
    const result = dc_config.mock?.user

    return result || {}
  }
}
