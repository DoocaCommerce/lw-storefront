import { LandingPagesService } from '../LandingPagesService'
import { LandingPage, LandingPageFields } from '../LandingPagesTypes'
import 'isomorphic-fetch'

describe('Landing Pages Module', () => {
  it('Should get landing page by id with all fields succefully', async () => {
    const ID_FILTER = 1
    const landingPageResult: LandingPage = await LandingPagesService.getLandingPageById(ID_FILTER)
    expect(landingPageResult.id).toEqual(ID_FILTER.toString())
  })

  it('Should get landing page by id with selected fields succefully', async () => {
    const ID_FILTER = 1
    const SELECTED_FIELDS: Array<LandingPageFields> = ['id', 'name', 'slug']
    const landingPageResult: LandingPage = await LandingPagesService.getLandingPageById(ID_FILTER, SELECTED_FIELDS)
    const landingPageResultFields = Object.keys(landingPageResult).filter(key => key != '__typename')
    expect(landingPageResultFields).toEqual(SELECTED_FIELDS)
    expect(landingPageResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get landing page by slug with all fields succefully', async () => {
    const SLUG_FILTER = 'test01'
    const landingPageResult: LandingPage = await LandingPagesService.getLandingPageBySlug(SLUG_FILTER)
    expect(landingPageResult.slug).toEqual(SLUG_FILTER)
  })
})
