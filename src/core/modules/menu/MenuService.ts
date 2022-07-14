import { MenuRepositoryGql } from './MenuRepositoryGql'
import { MenuRepositoryJson } from './MenuRepositoryJson'
import { Menu, MenuFields } from './MenuTypes'

const Repository = dc_config.mock?.menu ? MenuRepositoryJson : MenuRepositoryGql

export class MenuService {
  static async getById(id: string, fields?: Array<MenuFields>): Promise<Menu> {
    const result: Menu = await Repository.getById(Number(id), fields)
    return result
  }

  static async getList(fields?: Array<MenuFields>): Promise<Array<Menu>> {
    const result: Array<Menu> = await Repository.getList(fields)
    return result
  }
}
