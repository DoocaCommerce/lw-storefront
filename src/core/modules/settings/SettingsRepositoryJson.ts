import { Setting, SettingsRepository } from './SettingsTypes'

export class SettingsRepositoryJson {
  static async fetchSettings() {
    //@ts-ignore
    const result = dc_config.mock?.settings

    return result || {}
  }
}
