import { SettingsRepository } from './SettingsRepository'
import { Setting } from './SettingsTypes'

export class SettingsService {
  static async getSettings() {
    const result:Setting<unknown> = await SettingsRepository.fetchSettings()
    return result
  }
}
