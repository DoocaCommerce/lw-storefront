export class ScriptsQueries {
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
      'position',
      'name',
      'location',
      'page',
      'load_method',
      'content',
      'category',
      'active',
      'description',
      'url'
    ]
  }

  listFullQuery() {
    return `query Scripts($filter: filterScript) {
        scripts(filter: $filter) {
            ${this.getFields()}
          }
        }`
  }
}
