import { SettingsRepository } from './SettingsRepository'

export class SettingsService {
  static async getSettings() {
    const result = await SettingsRepository.fetchSettings()
    return result
  }
}
