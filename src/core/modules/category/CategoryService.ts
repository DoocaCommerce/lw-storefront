import { CategoryRepository } from "./CategoryRepository"
import { Category, CategoryFields } from "./CategoryTypes"

export class CategoryService {
    static async getCategoryById(id: Number, fields?: Array<CategoryFields>) {
        const result:Category = await CategoryRepository.getCategoryById(id, fields)
        return result
    }

    static async getCategoryBySlug(slug: String, fields?: Array<CategoryFields>) {
        const result:Category = await CategoryRepository.getCategoryBySlug(slug, fields)
        return result
    }
}
