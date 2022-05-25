import "isomorphic-fetch"
import { buildGeneralModuleAsserts } from "../../../helpers/testHelper"
import { CategoryService } from "../CategoryService"
import { Category, CategoryFields } from "../CategoryTypes"

const referenceCategoryAllFieldsObject = {
    id: 0,
    name: '',
    slug: '',
    position: 0,
    depth: 0,
    breadcrumb: '',
    url: '',
    active: false,
    created_at: '',
    updated_at: '',
    parent_id: 0,
    hotsite_id: 0,
    external_id: 0,
    description: '',
    image: '',
    banner: '',
    banner_link: '',
    google_taxonomy_id: 0,
    meta_title: '',
    meta_keywords: '',
    meta_description: '',
}

const selectedFields: Array<CategoryFields> = ['id', 'name', 'slug']

const referenceCategorySelectedFieldsObject = {
    id: 0,
    name: '',
    slug: ''
}

async function buildGetCategoryByIdAsserts(referenceObject: any, fields?: Array<CategoryFields>) {
    const ID_FILTER = 3 
    const categoryResult:Category = await CategoryService.getCategoryById(ID_FILTER, fields)
    buildGeneralModuleAsserts(categoryResult, referenceObject, {id: ID_FILTER}, ID_FILTER)
}

async function buildGetCategoryBySlugAsserts(referenceObject: any, fields?: Array<CategoryFields>) {
    const SLUG_FILTER = 'bolsas-femininas'
    const categoryResult:Category = await CategoryService.getCategoryBySlug(SLUG_FILTER, fields)
    buildGeneralModuleAsserts(categoryResult, referenceObject, {slug: SLUG_FILTER}, SLUG_FILTER)
}

describe('Category Module', () => {
    it('Get category by id with all fields', async () => {
        await buildGetCategoryByIdAsserts(referenceCategoryAllFieldsObject)
    })

    it('Get category by slug with all fields', async () => {
        await buildGetCategoryBySlugAsserts(referenceCategoryAllFieldsObject)
    })

    it('Get category by id with selected fields', async () => {
        await buildGetCategoryByIdAsserts(referenceCategorySelectedFieldsObject, selectedFields)
    })

    it('Get category by slug with selected fields', async () => {
        await buildGetCategoryBySlugAsserts(referenceCategorySelectedFieldsObject, selectedFields)
    })
})