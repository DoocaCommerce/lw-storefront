import { FastSearch, ShowcaseFields } from '../ShowcaseTypes'
import { ShowcaseService } from '../ShowcaseService'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<ShowcaseFields> = ['id', 'slug']

describe('Showcase Module', () => {
  it('Should get showcase by id with all fields successfully', async () => {
    const FILTER_ID = 64428
    const showcaseResult = await ShowcaseService.getShowcaseById(FILTER_ID)
    expect(showcaseResult.id).toEqual(FILTER_ID.toString())
    expect(showcaseResult.name).toEqual('Produtodeteste')
  })

  it('Should get showcase by id with selected fields successfully', async () => {
    const FILTER_ID = 64428
    const showcaseResult = await ShowcaseService.getShowcaseById(FILTER_ID, [...SELECTED_FIELDS])
    const showcaseResultFields = Object.keys(showcaseResult).filter(key => key != '__typename')
    expect(showcaseResultFields).toEqual(SELECTED_FIELDS)
    expect(showcaseResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get showcase by slug with all fields successfully', async () => {
    const FILTER_SLUG = 'sdfsd'
    const showcaseResult = await ShowcaseService.getShowcaseBySlug(FILTER_SLUG)
    expect(showcaseResult.slug).toEqual(FILTER_SLUG)
    expect(showcaseResult.name).toEqual('Produtodeteste')
  })

  it('Should get showcase and by fast search with all fields successfully', async () => {
    const FILTER_FAST_SEARCH: FastSearch = { queryString: 'sdfsd', fields: ['slug'] }
    const showcaseResult = await ShowcaseService.getShowcaseByFastSearch(FILTER_FAST_SEARCH)
    expect(showcaseResult.slug).toEqual('sdfsd')
    expect(showcaseResult.name).toEqual('Produtodeteste')
    expect(showcaseResult.id).toEqual('64428')
  })

  it('Should get showcase list with all fields successfully', async () => {
    const showcaseResult = await ShowcaseService.getShowcaseList({ page: 1, first: 1 })
    expect(showcaseResult.edges.length).toEqual(1)
  })

  it('Should try to get showcase by inexistant id and it should throw error', async () => {
    const FILTER_ID = 6
    expect(async () => await ShowcaseService.getShowcaseById(FILTER_ID)).rejects.toThrow()
  })
})
