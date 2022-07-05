export class BlogPostQueries {
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
      'post_category_id',
      'name',
      'slug',
      'image',
      'description',
      'tags',
      'active',
      'url',
      'meta_title',
      'meta_description',
      'meta_keywords',
      'created_at',
      'updated_at',
      `category {
            id,
            name,
            slug,
            description,
            meta_title,
            meta_description,
            active,
            posts_count,
            position,
            url,
            created_at,
            updated_at
        }`
    ]
  }

  listFullQuery() {
    return `query BlogPosts($filter: filterBlogPosts) {
        blogPosts(filter: $filter) {
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
    return `query BlogPost($filter: filterBlogPost) {
        blogPost(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
