import { Category, OptionsGetCategory, CategoryResponse, CategoryFields, CategoryTreeResponse, CategoryTree, CategoryTreeFields } from "./CategoryTypes"
import { client } from "../../services/GraphqlService"

const CATEGORY_QUERY_DEFAULT_FIELDS = ["id", "name", "slug", "position", "depth", "breadcrumb", "url"
, "active", "created_at", "updated_at", "parent_id", "hotsite_id", "external_id", "description"
, "image", "banner", "banner_link", "google_taxonomy_id", "meta_title", "meta_keywords", "meta_description"]

const CATEGORY_TREE_QUERY_DEFAULT_FIELDS = [...CATEGORY_QUERY_DEFAULT_FIELDS, `children {${CATEGORY_QUERY_DEFAULT_FIELDS.join()}}`]

export class CategoryRepository {
    private static async getCategory(optionsGetCategory: OptionsGetCategory<CategoryFields>): Promise<Category> {

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

    private static async getCategoryTree(optionsGetCategory: OptionsGetCategory<CategoryTreeFields>): Promise<Array<CategoryTree>> {

        const { fields, filter } = optionsGetCategory
        
        const categoryTreeFields: String = fields 
                                            ? fields
                                                .join()
                                                .replace('children', `children {${CATEGORY_QUERY_DEFAULT_FIELDS.join()}}`) 
                                            : CATEGORY_TREE_QUERY_DEFAULT_FIELDS.join()


        const brandQuery = `
            query getCategoryTree($filter: filterCategory){
                categoryTree(filter: $filter){
                    ${categoryTreeFields}
                }   
            }
        ` 

        const { categoryTree }:CategoryTreeResponse = await client.query(brandQuery, filter && {filter: {...filter}})
        
        return categoryTree
    }


    static async getCategoryById(id: Number, fields?: Array<CategoryFields>): Promise<Category> {
        return this.getCategory({fields: fields || null, filter: {id: id}})
    }

    static async getCategoryBySlug(slug: String, fields?: Array<CategoryFields>): Promise<Category> {
        return this.getCategory({fields: fields || null, filter: {slug: slug}})
    }

    static async getCategoryTreeById(id: Number, fields?: Array<CategoryTreeFields>): Promise<Array<CategoryTree>> {
        return this.getCategoryTree({fields: fields || null, filter: {id: id}})
    }

    static async getCategoryTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>): Promise<Array<CategoryTree>> {
        return this.getCategoryTree({fields: fields || null, filter: {slug: slug}})
    }
}
