export interface Section<T> {
  shop_id: Number
  theme_id: Number
  version: String
  page: String
  data: T
}

export interface SectionResponse {
  section: Section<string>
}

export interface SectionFilter {
  section_type?: String
  theme_id?: Number
  version?: String
  page?: String
}
