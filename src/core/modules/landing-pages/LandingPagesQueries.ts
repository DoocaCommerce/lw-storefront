export class LandingPagesQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'shop_id',
      'id',
      'name',
      'content',
      'slug',
      'not_index',
      'active',
      'url',
      'created_at',
      'updated_at',
      'meta_title',
      'meta_description',
      'meta_keywords'
    ]
  }

  getOnefullQuery() {
    return `query LandingPage($filter: filter) {
        landingPage(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
