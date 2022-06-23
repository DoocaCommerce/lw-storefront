import { Menu, MenuFields } from '../MenuTypes'
import { MenuService } from '../MenuService'
import "isomorphic-fetch"

const ID_FILTER = 47018
const SELECTED_FIELDS: Array<MenuFields> = ['id', 'name', 'values']
 
describe('Menu Module', () => {
    it('Should Get menu by id with all fields successfully', async () => {
        const menuResult: Menu = await MenuService.getMenuById(ID_FILTER)
        expect(menuResult.id).toEqual(ID_FILTER)
    })

    it('Should Get menu by id with selected fields successfully', async () => {
        const menuResult: Menu = await MenuService.getMenuById(ID_FILTER, [...SELECTED_FIELDS])
        const menuResultKeys = Object.keys(menuResult).filter(key => key != '__typename')
        expect(menuResultKeys).toEqual(SELECTED_FIELDS)
        expect(menuResultKeys.length).toEqual(SELECTED_FIELDS.length)
    })

    it('Should Get menu list with all fields successfully', async () => {
        const FIRST_ITEM_INDEX = 0
        const menuListResult: Array<Menu> = await MenuService.getMenuList()
        expect(menuListResult.length).toEqual(1)
        expect(menuListResult[FIRST_ITEM_INDEX].id).toEqual(ID_FILTER)
    })
})
