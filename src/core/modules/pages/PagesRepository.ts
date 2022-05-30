import { OptionsGetPage, Page, PageFields, PageListResponse, PageResponse } from "./PageTypes"
import { client } from "../../services/GraphqlService"

const PAGE_QUERY_DEFAULT_FILTERS = ["id", "name", "slug", "template", "url", "active"
, "faq", "created_at", "updated_at", "description", "meta_title", "meta_description"
, "meta_keywords"]

export class PagesRepository {
    static async getPageList(fields?: Array<PageFields>): Promise<Array<Page>> {
        const queryFields: String = (fields 
                                    ? fields
                                        .join() 
                                    : PAGE_QUERY_DEFAULT_FILTERS
                                        .join())
                                    .replace('faq', 'faq {active answer question}')

        const pageQuery = `
        query getPages {
            pages {
            ${queryFields}
            }
        }
        `

        const { pages }:PageListResponse = await client.query(pageQuery)
        
        return pages
    }

    private static async getPage(optionsGetPage: OptionsGetPage): Promise<Page> {
        const { fields, filter } = optionsGetPage

        const queryFields: String = (fields 
                                    ? fields
                                        .join() 
                                    : PAGE_QUERY_DEFAULT_FILTERS
                                        .join())
                                    .replace('faq', 'faq {active answer question}')

        const pageQuery = `
        query getPageBy($filter: filterPage){
            pageBy(filter: $filter){
            ${queryFields}
            }
        }
        `

        const { pageBy }:PageResponse = await client.query(pageQuery, filter && {filter: {...filter}})
        
        return pageBy
    }

    static async getPageById(id: Number, fields?: Array<PageFields>): Promise<Page> {
        return this.getPage({fields: fields || null, filter: {id: id}})
    }

    static async getPageBySlug(slug: String, fields?: Array<PageFields>): Promise<Page> {
        return this.getPage({fields: fields || null, filter: {slug: slug}})
    }
}
