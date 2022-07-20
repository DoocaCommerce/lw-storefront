import { AppsService } from '../AppsService'
import { AppsFields } from '../AppsTypes'
import 'isomorphic-fetch'

const ID_FILTER = '1041'

describe('Apps Module', () => {
  it('Should get apps by id with all fields suceffully', async () => {
    const appsResult = await AppsService.getById(ID_FILTER)
    expect(appsResult.id).toEqual(ID_FILTER)
  })

  it('Should get apps by id with selected fields suceffully', async () => {
    const SELECTED_FIELDS: Array<AppsFields> = ['id', 'slug', 'user_id']
    const appsResult = await AppsService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const appsResultFields = Object.keys(appsResult).filter(key => key != '__typename')
    expect(appsResultFields).toEqual(SELECTED_FIELDS)
    expect(appsResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get apps by not existant id and should throw error', async () => {
    expect(async () => await AppsService.getById('12')).rejects.toThrow()
  })
})
