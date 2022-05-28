import { SettingsRepositoryGql } from './SettingsRepositoryGql'
import { SettingsRepositoryJson } from './SettingsRepositoryJson'
import { Setting } from './SettingsTypes'

//@ts-ignore
const Repository = dc_config.mock?.settings ? SettingsRepositoryJson : SettingsRepositoryGql
//@ts-ignore
console.log(dc_config)

export class SettingsService {
  static async getSettings() {
    const result: Setting<unknown> = await Repository.fetchSettings()
    return result
  }
}
