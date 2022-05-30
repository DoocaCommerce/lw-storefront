import { BlogSeoServiceBase } from './BlogSeoServiceBase'
import { Post } from '../../types/PostTypes'
import { PostMicroData } from './types'

export class BlogPostSeoService extends BlogSeoServiceBase {
  post: Post

  constructor(data: Post) {
    super()
    this.post = data
  }

  public getBlogPost(): string {
    let microData: PostMicroData = {
      '@context': 'https://schema.org',
      ...this.getPostData(this.post)
    }
    return this.render(microData)
  }
}
