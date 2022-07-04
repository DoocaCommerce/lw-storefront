export class AppsQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['id', 'slug', 'price', 'shop_id', 'store_app_id', 'content', 'user_id', 'bridge_package_id']
  }

  getApps() {
    return `query Apps($filter: filterApps) {
        apps(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
