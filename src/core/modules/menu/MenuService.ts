import { MenuRepository } from "./MenuRepository"
import { Menu, MenuFields } from "./MenuTypes"

export class MenuService {
  static async getMenuById(id: Number, fields?: Array<MenuFields>): Promise<Menu> {
    const result: Menu = await MenuRepository.getMenuById(id, fields)
    return result
  }
}
