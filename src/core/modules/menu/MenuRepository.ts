import { client } from '../../services/GraphqlService'
import { Menu, MenuFields, MenuResponse, OptionsGetMenu } from './MenuTypes'

const MENU_QUERY_DEFAULT_FIELDS = [
    'id',
    'name',
    'handle',
    'createdAt',
    'updatedAt'
]

const menuValuesField:MenuFields = 'values'

const MENU_VALUE_QUERY_DEFAULT_FIELDS = [
    'id', 
    'menu_id', 
    'brand_id',
    'name',
    'menu_type',
    'slug', 
    'menu_type_slug', 
    'active', 
    'created_at', 
    'image {src, alt}', 
    'parent_id', 
    'page_id', 
    'hotsite_id',
    'category_id',
    'banner',
    'banner_link',
    'is_featured',
    'link',
    'menu_type_link',
    'updated_at',
    'position',
    'children',
]

export class MenuRepository {
  private static async getMenu(optionsGetMenu: OptionsGetMenu): Promise<Menu> {

    const { fields, filter } = optionsGetMenu

    const queryFields: String = (fields ? fields : [ ...MENU_QUERY_DEFAULT_FIELDS, menuValuesField ])
                                    .join()
                                    .replace('values', 'values {}')
                                    .replace('children', `children {${MENU_VALUE_QUERY_DEFAULT_FIELDS
                                                                    .join()
                                                                    .replace('image', 'image {alt, src}')}}`)


    const brandQuery = `
      query getMenu($filter: filterMenu){
        menu(filter: $filter){
          ${queryFields}
        }
      }
    `

    console.log(brandQuery)

    const { menu }:MenuResponse = await client.query(brandQuery, filter && {filter: {...filter}})
  
    return menu
  }

  static async getMenuById(id: Number, fields?: Array<MenuFields>): Promise<Menu> {
    return this.getMenu({fields: fields || null, filter: {id: id}})
  }
}
