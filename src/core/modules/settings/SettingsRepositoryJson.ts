export class SettingsRepositoryJson {
  static async fetchSettings() {
    const result = dc_config.mock?.settings

    return result || {}
  }
}
