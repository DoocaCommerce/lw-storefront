export class SettingsRepositoryJson {
  static async getOne() {
    const result = dc_config.mock?.settings

    return result || {}
  }
}
