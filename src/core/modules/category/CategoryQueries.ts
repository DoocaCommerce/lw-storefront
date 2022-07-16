export class CategoryQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getChildrenFields() {
    return `children {
      id,
      name,
      slug,
      position,
      depth,
      breadcrumb,
      url,
      active,
      created_at,
      updated_at,
      parent_id,
      hotsite_id,
      external_id,
      description,
      image,
      banner,
      banner_link,
      google_taxonomy_id,
      meta_title,
      meta_keywords,
      meta_description,
    }`
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'slug',
      'position',
      'depth',
      'breadcrumb',
      'url',
      'active',
      'created_at',
      'updated_at',
      'parent_id',
      'hotsite_id',
      'external_id',
      'description',
      'image',
      'banner',
      'banner_link',
      'google_taxonomy_id',
      'meta_title',
      'meta_keywords',
      'meta_description'
    ]
  }

  treeFullQuery() {
    return `query getCategoryTree($filter: filterCategory){
        categoryTree(filter: $filter){
                ${this.getFields()},
                ${this.getChildrenFields()}
          }
        }`
  }

  getOnefullQuery() {
    return `query getCategory($filter: filterCategory){
        category(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
