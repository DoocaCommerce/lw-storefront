export interface PaginationFilter {
  page: Number
  first?: Number
}

export interface PageInfo {
  hasNextPage?: Boolean
  hasPreviousPage?: Boolean
  startCursor?: String
  endCursor?: String
}