export class BrandQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getImageFields() {
    return '{alt, src}'
  }

  private defaultFields() {
    return [
      'id',
      'hotsite_id',
      'external_id',
      'name',
      'slug',
      'description',
      'short_description',
      `image ${this.getImageFields()}`,
      `banner ${this.getImageFields()}`,
      'meta_title',
      'meta_keywords',
      'meta_description',
      'position',
      'url',
      'active',
      'created_at',
      'updated_at'
    ]
  }

  listFullQuery() {
    return `query getBrands($filter: filterPaginationBrand) {
        brands(filter: $filter) {
          edges {
            node {
              ${this.getFields()}
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            first
            total
          }
        }
      }`
  }

  getOnefullQuery() {
    return `query getBrand($filter: filterBrand){
      brand(filter: $filter){
        ${this.getFields()}
      }
    }`
  }
}
