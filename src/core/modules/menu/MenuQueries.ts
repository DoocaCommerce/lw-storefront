export class MenuQueries {
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
      'name',
      'handle',
      'createdAt',
      'updatedAt',
      `values {
        id, 
        menu_id, 
        brand_id,
        name,
        menu_type,
        slug, 
        menu_type_slug, 
        active, 
        created_at, 
        image ${this.getImageFields()},
        parent_id, 
        page_id, 
        hotsite_id,
        category_id,
        banner,
        banner_link,
        is_featured,
        link,
        menu_type_link,
        updated_at,
        position,
        children {
            id, 
            menu_id, 
            brand_id,
            name,
            menu_type,
            slug, 
            menu_type_slug, 
            active, 
            created_at, 
            image ${this.getImageFields()},
            parent_id, 
            page_id, 
            hotsite_id,
            category_id,
            banner,
            banner_link,
            is_featured,
            link,
            menu_type_link,
            updated_at,
            position
        }
      }`
    ]
  }

  listFullQuery() {
    return `query getMenus {
        menus {
            ${this.getFields()}
        }
      }`
  }

  getOnefullQuery() {
    return `query getMenu($filter: filterMenu){
        menu(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
