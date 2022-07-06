import { FastSearch, ShowcaseFields } from './ShowcaseTypes'

export class ShowcaseRepositoryJson {
  static async getList() {
    const result = dc_config.mock?.showcase
    return result || {}
  }

  static async getById(id: Number, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.id == id) } || {}
  }

  static async getBySlug(slug: String, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.slug == slug) } || {}
  }

  static async search(queryString: String, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges[0] } || {}
  }
}
