export class UserQueries {
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
      'email',
      'first_name',
      'last_name',
      'gender',
      'newsletter',
      'marketplace',
      'customer_group_id',
      'external_id',
      'entity',
      'company',
      'ie',
      'birthday',
      'phone',
      'token',
      'reset_token',
      'note',
      'facebook_id',
      'google_id',
      'active',
      'created_at',
      'updated_at',
      'doc',
      'group {id, name}',
      'address {id, receiver, zip_code, street, city, state, number, detail}',
      'image {src, alt}'
    ]
  }

  auth() {
    return `mutation Login($credentials: Credentials) {
        login(credentials: $credentials) {
          ${this.getFields()}
        }
      }`
  }
  get() {
    return `query User($filter: filterUser) {
        user(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
