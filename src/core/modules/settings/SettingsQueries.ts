export class SettingsQueries {
  fields: null | Array<string>

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['shop_id', 'theme_id', 'version', 'page', 'data']
  }

  getOnefullQuery() {
    return `query Setting {
        setting {
          ${this.getFields()}
        }
      }`
  }
}
