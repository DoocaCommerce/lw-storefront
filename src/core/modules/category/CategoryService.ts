import { CategoryRepository } from "./CategoryRepository"
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from "./CategoryTypes"

export class CategoryService {
    static async getCategoryById(id: Number, fields?: Array<CategoryFields>) {
        const result:Category = await CategoryRepository.getCategoryById(id, fields)
        return result
    }

    static async getCategoryBySlug(slug: String, fields?: Array<CategoryFields>) {
        const result:Category = await CategoryRepository.getCategoryBySlug(slug, fields)
        return result
    }

    static async getCategoryTreeById(id: Number, fields?: Array<CategoryTreeFields>) {
        const result:Array<CategoryTree> = await CategoryRepository.getCategoryTreeById(id, fields)
        return result
    }

    static async getCategoryTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>) {
        const result:Array<CategoryTree> = await CategoryRepository.getCategoryTreeBySlug(slug, fields)
        return result
    }
}
