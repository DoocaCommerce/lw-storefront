import { FastSearch, ShowcaseFields } from './ShowcaseTypes'

export class ShowcaseRepositoryJson {
  static async getShowcaseList() {
    const result = dc_config.mock?.showcase
    return result || {}
  }

  static async getShowcaseById(id: Number, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.id == id) } || {}
  }

  static async getShowcaseBySlug(slug: String, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.slug == slug) } || {}
  }

  static async getShowcaseByFastSearch(fastSearch: FastSearch, fields?: Array<ShowcaseFields>) {
    const result = dc_config.mock?.showcase
    return { ...result, edges: result.edges[0] } || {}
  }
}
