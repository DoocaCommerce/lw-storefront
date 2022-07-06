import { client } from '../../services/GraphqlService'
import { MenuQueries } from './MenuQueries'
import { Menu, MenuFields, MenuListResponse, MenuResponse, OptionsGetMenu } from './MenuTypes'

export class MenuRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetMenu): Promise<Menu> {
    const menuQuery = new MenuQueries(fields)
    const menuGetOneQuery: string = menuQuery.getOnefullQuery()
    try {
      const { menu }: MenuResponse = await client.query(menuGetOneQuery, filter && { filter: { ...filter } })

      return menu
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getList(fields?: Array<MenuFields>): Promise<Array<Menu>> {
    const menuQuery = new MenuQueries(fields)
    const menuListQuery: string = menuQuery.listFullQuery()
    try {
      const { menus }: MenuListResponse = await client.query(menuListQuery)

      return menus
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<MenuFields>): Promise<Menu> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }
}
