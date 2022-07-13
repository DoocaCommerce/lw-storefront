import { useEffect, useState } from 'react'
import { BlogPostFields } from '../../core/modules/blog/post/BlogPostTypes'
import { PaginationFilter } from '../../core/types/PaginationTypes'
import { services } from '../../core'

interface BlogPostHookInterface {
  id?: string
  slug?: string
  pagination?: PaginationFilter
}

export function useBlogPosts({ id, slug, pagination }: BlogPostHookInterface, fields?: Array<BlogPostFields>): any {
  const [blogPosts, setBlogPosts] = useState<any>()

  async function getOne({ id, slug }: BlogPostHookInterface, fields?: Array<BlogPostFields>) {
    const service = id ? services.blogPost.getById : services.blogPost.getBySlug
    const param = id ?? slug
    const result = await service(param, fields)
    setBlogPosts(result)
  }

  async function getList(pagination?: PaginationFilter, fields?: Array<BlogPostFields>) {
    const result = await services.blogPost.getList(pagination, fields)
    setBlogPosts(result)
  }

  useEffect(() => {
    id || slug ? getOne({ id, slug }, fields) : getList(pagination, fields)
  }, [])

  return blogPosts
}
