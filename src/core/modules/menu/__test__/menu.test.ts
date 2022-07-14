import { Menu, MenuFields } from '../MenuTypes'
import { MenuService } from '../MenuService'
import 'isomorphic-fetch'

const ID_FILTER = '47028'
const SELECTED_FIELDS: Array<MenuFields> = ['id', 'name']

describe('Menu Module', () => {
  it('Should get menu by id with all fields successfully', async () => {
    const menuResult: Menu = await MenuService.getById(ID_FILTER)
    expect(menuResult.id).toEqual(ID_FILTER)
  })

  it('Should get menu by id with selected fields successfully', async () => {
    const menuResult: Menu = await MenuService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const menuResultKeys = Object.keys(menuResult).filter(key => key != '__typename')
    expect(menuResultKeys).toEqual(SELECTED_FIELDS)
    expect(menuResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should Get menu list with all fields successfully', async () => {
    const FIRST_ITEM_INDEX = 0
    const menuListResult: Array<Menu> = await MenuService.getList()
    expect(menuListResult.length).toEqual(2)
    expect(menuListResult[FIRST_ITEM_INDEX].id).toEqual(ID_FILTER)
  })

  it('Should get menu list with all fields successfully', async () => {
    const FIRST_ITEM_INDEX = 0
    const menuListResult: Array<Menu> = await MenuService.getList()
    expect(menuListResult.length).toEqual(2)
    expect(menuListResult[FIRST_ITEM_INDEX].id).toEqual(ID_FILTER)
  })

  it('Should try to get menu with inexistant id and it should throw error', async () => {
    expect(async () => await MenuService.getById('1')).rejects.toThrow()
  })
})
