import { Menu, MenuFields } from '../MenuTypes'
import { MenuService } from '../MenuService'
import "isomorphic-fetch"
import { buildBaseAsserts, buildGeneralModuleAsserts } from '../../../helpers/testHelper'

const refereceMenuAllFieldsObject: Menu = {
    id: 0,
    name: '',
    handle: '',
    createdAt: '',
    updatedAt: '',
    values: {}
}

const refereceMenuSelectedFieldsObject: Menu = {
    id: 0,
    name: '',
    values: {}
}

const selectedFields: Array<MenuFields> = ['id', 'name', 'values']

async function buildGetMenuByIdAsserts(referenceObject: unknown, fields?: Array<MenuFields>) {
    const ID_FILTER = 47018
    const menuResult: Menu = await MenuService.getMenuById(ID_FILTER, fields)
    buildGeneralModuleAsserts(menuResult, referenceObject, {id: ID_FILTER}, ID_FILTER)
}

describe('Menu Module', () => {
    it('Should Get menu by id with all fields', async () => {
        await buildGetMenuByIdAsserts(refereceMenuAllFieldsObject)
    })

    it('Should Get menu by id with selected fields', async () => {
        await buildGetMenuByIdAsserts(refereceMenuSelectedFieldsObject, selectedFields)
    })
})