import { AppsService } from '../AppsService'
import 'isomorphic-fetch'
import { AppsFields } from '../AppsTypes'

const ID_FILTER = 0

describe('Apps Module', () => {
  it('Should get apps by id with all fields suceffully', async () => {
    const appsResult = await AppsService.getAppsById(ID_FILTER)
    expect(appsResult.id).toEqual(ID_FILTER.toString())
  })

  it('Should get apps by id with selected fields suceffully', async () => {
    const SELECTED_FIELDS: Array<AppsFields> = ['id', 'slug', 'user_id']
    const appsResult = await AppsService.getAppsById(ID_FILTER, [...SELECTED_FIELDS])
    const appsResultFields = Object.keys(appsResult).filter(key => key != '__typename')
    expect(appsResultFields).toEqual(SELECTED_FIELDS)
    expect(appsResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get apps by not existant id and should throw error', async () => {
    expect(async () => await AppsService.getAppsById(12)).toThrowError()
  })
})
