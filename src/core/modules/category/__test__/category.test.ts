import 'isomorphic-fetch'
import { buildGeneralModuleAsserts } from '../../../helpers/__test__/testHelper'
import { CategoryService } from '../CategoryService'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from '../CategoryTypes'

const referenceCategoryAllFieldsObject: Category = {
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
  meta_description: ''
}

const referenceCategoryTreeAllFieldsObject: CategoryTree = { ...referenceCategoryAllFieldsObject, children: [] }

const categorySelectedFields: Array<CategoryFields> = ['id', 'name', 'slug']

const referenceCategorySelectedFieldsObject: Category = {
  id: 0,
  name: '',
  slug: ''
}

const categoryTreeSelectedFields: Array<CategoryTreeFields> = ['id', 'name', 'slug', 'children']

const referenceCategoryTreeSelectedFieldsObject: CategoryTree = {
  ...referenceCategorySelectedFieldsObject,
  children: []
}

async function buildGetCategoryByIdAsserts(referenceObject: any, fields?: Array<CategoryFields>) {
  const ID_FILTER = 3
  const categoryResult: Category = await CategoryService.getCategoryById(ID_FILTER, fields)
  buildGeneralModuleAsserts(categoryResult, referenceObject, { id: ID_FILTER }, ID_FILTER)
}

async function buildGetCategoryBySlugAsserts(referenceObject: any, fields?: Array<CategoryFields>) {
  const SLUG_FILTER = 'bolsas-femininas'
  const categoryResult: Category = await CategoryService.getCategoryBySlug(SLUG_FILTER, fields)
  buildGeneralModuleAsserts(categoryResult, referenceObject, { slug: SLUG_FILTER }, SLUG_FILTER)
}

async function buildGetCategoryTreeByIdAsserts(referenceObject: any, fields?: Array<CategoryTreeFields>) {
  const ID_FILTER = 1104
  const categoryResult: Array<CategoryTree> = await CategoryService.getCategoryTreeById(ID_FILTER, fields)
  categoryResult.forEach(category => buildGeneralModuleAsserts(category, referenceObject, { id: ID_FILTER }, ID_FILTER))
}

async function buildGetCategoryTreeBySlugAsserts(referenceObject: any, fields?: Array<CategoryTreeFields>) {
  const SLUG_FILTER = 'produtos-masculinos'
  const categoryResult: Array<CategoryTree> = await CategoryService.getCategoryTreeBySlug(SLUG_FILTER, fields)
  categoryResult.forEach(category =>
    buildGeneralModuleAsserts(category, referenceObject, { slug: SLUG_FILTER }, SLUG_FILTER)
  )
}

describe('Category Module', () => {
  it('Get category by id with all fields', async () => {
    await buildGetCategoryByIdAsserts(referenceCategoryAllFieldsObject)
  })

  it('Get category by slug with all fields', async () => {
    await buildGetCategoryBySlugAsserts(referenceCategoryAllFieldsObject)
  })

  it('Get category by id with selected fields', async () => {
    await buildGetCategoryByIdAsserts(referenceCategorySelectedFieldsObject, categorySelectedFields)
  })

  it('Get category by slug with selected fields', async () => {
    await buildGetCategoryBySlugAsserts(referenceCategorySelectedFieldsObject, categorySelectedFields)
  })

  it('Get categoryTree by id with all fields', async () => {
    await buildGetCategoryTreeByIdAsserts(referenceCategoryTreeAllFieldsObject)
  })

  it('Get categoryTree by slug with all fields', async () => {
    await buildGetCategoryTreeBySlugAsserts(referenceCategoryTreeAllFieldsObject)
  })

  it('Get categoryTree by id with selected fields', async () => {
    await buildGetCategoryTreeByIdAsserts(referenceCategoryTreeSelectedFieldsObject, categoryTreeSelectedFields)
  })

  it('Get categoryTree by slug with selected fields', async () => {
    await buildGetCategoryTreeBySlugAsserts(referenceCategoryTreeSelectedFieldsObject, categoryTreeSelectedFields)
  })
})
