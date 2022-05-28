import { BlogSeoServiceBase } from './BlogSeoServiceBase'
import { Post } from '../../types/PostTypes'
import { PostListMicroData, PostListMicroDataItem } from './types'

export class BlogCategorySeoService extends BlogSeoServiceBase {
  posts: Post[]

  constructor(data: Post[]) {
    super()
    this.posts = data
  }

  public getBlogCategory(): string {
    let microData: PostListMicroData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: []
    }
    this.posts.forEach((post: Post, index: number) => {
      let listItem: PostListMicroDataItem = {
        '@type': 'ListItem',
        position: index + 1,
        item: this.getPostData(post)
      }
      microData.itemListElement.push(listItem)
    })
    return this.render(microData)
  }
}
