import { buildGeneralModuleAsserts } from "../../../helpers/testHelper"
import { PagesService } from '../PagesService'
import { Page, PageFields } from "../PageTypes"

const referencePageObjectAllFields = {
    id: 0,
    name: '',
    slug: '',
    template: '',
    url: '',
    active: false,
    faq: {},
    created_at: '',
    updated_at: '',
    description: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: ''
}

const selectedFIelds: Array<PageFields> = ['id', 'slug', 'name', 'active', 'faq']

const referencePageObjectSelectedFields = {
    id: 0,
    slug: '',
    name: '',
    active: false,
    faq: {}
}

async function buildGetPageByIdAsserts(referenceObject: any, fields?: Array<PageFields>) {
    const ID_FILTER = 320
    const pageResult:Page = await PagesService.getPageById(ID_FILTER, fields)
    buildGeneralModuleAsserts(pageResult, referenceObject, {id: ID_FILTER}, ID_FILTER)
}

async function buildGetPageBySlugAsserts(referenceObject: any, fields?: Array<PageFields>) {
    const SLUG_FILTER = 'sobre-a-dc-gamer'
    const pageResult:Page = await PagesService.getPageBySlug(SLUG_FILTER, fields)
    buildGeneralModuleAsserts(pageResult, referenceObject, {slug: SLUG_FILTER}, SLUG_FILTER)
}

describe('Pages Module', () => {
    it('Should get page by id with all fields', async () => {
        await buildGetPageByIdAsserts(referencePageObjectAllFields)
    })

    it('Should get page by slug with all fields', async () => {
        await buildGetPageBySlugAsserts(referencePageObjectAllFields)
    })

    it('Should get page by id with selected fields when passing array of fields as parameter', async () => {
        await buildGetPageByIdAsserts(referencePageObjectSelectedFields, selectedFIelds)
    })

    it('Should get page by slug with selected fields when passing array of fields as parameter', async () => {
        await buildGetPageBySlugAsserts(referencePageObjectSelectedFields, selectedFIelds)
    })
    
    it('Should get page list with all fields', async () => {
        const result: Array<Page> = await PagesService.getPageList()
        result.forEach(page => buildGeneralModuleAsserts(page, referencePageObjectAllFields))
    })

    it('Should get page list with selected fields', async () => {
        const result: Array<Page> = await PagesService.getPageList(selectedFIelds)
        result.forEach(page => buildGeneralModuleAsserts(page, referencePageObjectSelectedFields))
    })
})
