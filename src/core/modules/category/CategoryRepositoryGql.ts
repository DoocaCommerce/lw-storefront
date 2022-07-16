import {
  Category,
  OptionsGetCategory,
  CategoryResponse,
  CategoryFields,
  CategoryTreeResponse,
  CategoryTree,
  CategoryTreeFields
} from './CategoryTypes'
import { client } from '../../services/GraphqlService'
import { CategoryQueries } from './CategoryQueries'

export class CategoryRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetCategory<CategoryFields>): Promise<Category> {
    const categoryQuery = new CategoryQueries(fields)
    const getOneQuery: string = categoryQuery.getOnefullQuery()
    try {
      const { category }: CategoryResponse = await client.query(getOneQuery, filter && { filter: { ...filter } })

      return category
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getTree({
    fields,
    filter
  }: OptionsGetCategory<CategoryTreeFields>): Promise<Array<CategoryTree>> {
    const categoryQuery = new CategoryQueries(fields)
    const getTreeQuery: string = categoryQuery.treeFullQuery()
    try {
      const { categoryTree }: CategoryTreeResponse = await client.query(
        getTreeQuery,
        filter && { filter: { ...filter } }
      )

      return categoryTree
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<CategoryFields>): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<CategoryFields>): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }

  static async getTreeById(id: Number, fields?: Array<CategoryTreeFields>): Promise<Array<CategoryTree>> {
    return this.getTree({ fields: fields || null, filter: { id: id } })
  }

  static async getTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>): Promise<Array<CategoryTree>> {
    return this.getTree({ fields: fields || null, filter: { slug: slug } })
  }
}
