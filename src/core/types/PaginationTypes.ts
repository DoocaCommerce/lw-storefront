export interface PaginationFilter {
  page: Number
  first?: Number
}

export interface PageInfo {
  hasNextPage?: Boolean
  hasPreviousPage?: Boolean
  startCursor?: String
  endCursor?: String
  first?: Number
  total?: Number
}

export interface PageableListObject<T> {
  edges: Array<T>
  pageInfo: PageInfo
}

export interface PageableEdgeObject<T> {
  node: T
  cursor?: String
}
