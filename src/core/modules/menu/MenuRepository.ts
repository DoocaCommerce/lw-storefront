import { client } from '../../services/GraphqlService'
import { Menu, MenuFields, MenuResponse, OptionsGetMenu } from './MenuTypes'

const MENU_ITEM_DEFAULT_FIELDS = [
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
]

const VALUES_DEFAULT_FIELDS = [
  ...MENU_ITEM_DEFAULT_FIELDS,
  `children {${MENU_ITEM_DEFAULT_FIELDS.join()}}`
]

const valueField = `values {${VALUES_DEFAULT_FIELDS.join()}}`

const MENU_QUERY_DEFAULT_FIELDS = [
    'id',
    'name',
    'handle',
    'createdAt',
    'updatedAt',
    valueField
]

export class MenuRepository {
  private static replaceMenuValuesFields(fields: Array<String>): Array<String> {
    const indexOfField = fields.indexOf('values')
    const isFieldSelected = indexOfField != -1 
    isFieldSelected && (fields[indexOfField] = valueField)

    return fields
}

  private static async getMenu(optionsGetMenu: OptionsGetMenu): Promise<Menu> {

    const { fields, filter } = optionsGetMenu

    const queryFields: String = (fields ? this.replaceMenuValuesFields(fields) : MENU_QUERY_DEFAULT_FIELDS).join()

    const brandQuery = `
      query getMenu($filter: filterMenu){
        menu(filter: $filter){
          ${queryFields}
        }
      }
    `
    
    const { menu }:MenuResponse = await client.query(brandQuery, filter && {filter: {...filter}})
  
    return menu
  }

  static async getMenuById(id: Number, fields?: Array<MenuFields>): Promise<Menu> {
    return this.getMenu({fields: fields || null, filter: {id: id}})
  }
}
