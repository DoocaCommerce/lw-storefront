export interface Section<T> {
    shop_id: number
    theme_id: number
    version: string
    page: string
    data: T
}

export interface SectionResponse {
    section: Section<string>
}

export interface SectionFilter {
    section_type?: string
    theme_id?: number
    version?: string
    page?: string
}
