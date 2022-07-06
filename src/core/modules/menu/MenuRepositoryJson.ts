import { MenuFields } from './MenuTypes'

export class MenuRepositoryJson {
  static async getList(fields?: Array<MenuFields>) {
    const result = dc_config.mock?.menu
    return result || {}
  }

  static async getById(id: Number, fields?: Array<MenuFields>) {
    const menus = dc_config.mock?.menu
    const result = menus && menus.filter(menu => menu.id == id)[0]
    return result || {}
  }
}
