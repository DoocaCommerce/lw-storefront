export class PagesQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'slug',
      'template',
      'url',
      'active',
      'faq {active, answer, question}',
      'created_at',
      'updated_at',
      'description',
      'meta_title',
      'meta_description',
      'meta_keywords'
    ]
  }

  listFullQuery() {
    return `query getPages {
        pages {
            ${this.getFields()}
        }
      }`
  }

  getOnefullQuery() {
    return `query getPageBy($filter: filterPage){
        pageBy(filter: $filter){
            ${this.getFields()}
        }
      }`
  }
}
