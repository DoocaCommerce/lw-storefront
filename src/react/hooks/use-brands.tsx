import { useEffect, useState } from 'react'
import { BrandFields } from 'src/core/modules/brand/BrandTypes'
import { PaginationFilter } from 'src/core/types/PaginationTypes'
import { services } from '../../core'

interface BrandHookParams {
  id?: string
  slug?: string
  pagination?: PaginationFilter
}

interface GetOneParams {
  id?: string
  slug?: string
}

export function useBrands({ id, slug, pagination }: BrandHookParams, fields?: Array<BrandFields>): any {
  const [brands, setBrands] = useState<any>()

  async function getOne({ id, slug }: GetOneParams, fields?: Array<BrandFields>) {
    const service = id ? services.brand.getById : services.brand.getBySlug
    const param = id ?? slug
    const brands = await service(param, fields)
    setBrands(brands)
  }

  async function getList(pagination?: PaginationFilter, fields?: Array<BrandFields>) {
    const brands = await services.brand.getList(pagination, fields)
    brands && setBrands(brands)
  }

  useEffect(() => {
    id || slug ? getOne({ id: id, slug: slug }, fields) : getList(pagination, fields)
  }, [])

  return brands
}
