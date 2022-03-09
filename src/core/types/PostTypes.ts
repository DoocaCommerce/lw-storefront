import { nullable } from './NullableTypes'
import { Category } from './CategoryTypes'
import { Image } from './ImageTypes'

export interface Post {
  id: number
  post_category_id: number
  name: string
  description: string
  slug: string
  created_at: string
  updated_at: string
  url: string
  image?: nullable<Image>
  tags?: nullable<Tag[]>
  active?: nullable<boolean>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  meta_keywords?: nullable<string>
  category?: nullable<Category>
}

interface Tag {
  name: string
}
