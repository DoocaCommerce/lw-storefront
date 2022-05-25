import { Category, OptionsGetCategory, CategoryResponse, CategoryFields } from "./CategoryTypes"
import { client } from "../../services/GraphqlService"

const CATEGORY_QUERY_DEFAULT_FIELDS = []

export class CategoryRepository {
    private static async getCategory(optionsGetCategory: OptionsGetCategory): Promise<Category> {

        const { fields, filter } = optionsGetCategory

        const categoryFields: String = fields ? fields.join() : CATEGORY_QUERY_DEFAULT_FIELDS.join()

        const brandQuery = `
            query getCategory($filter: filterCategory){
                category(filter: $filter){
                    ${categoryFields}
                }   
            }
        ` 

        const { category }:CategoryResponse = await client.query(brandQuery, filter && {filter: {...filter}})
    
        return category
    }

    static async getCategoryById(id: Number, fields?: Array<CategoryFields>): Promise<Category> {
        return this.getCategory({fields: fields || null, filter: {id: id}})
    }

    static async getCategoryBySlug(slug: String, fields?: Array<CategoryFields>): Promise<Category> {
        return this.getCategory({fields: fields || null, filter: {slug: slug}})
    }
}