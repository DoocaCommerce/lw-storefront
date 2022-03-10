import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { BrandMicroDataProps } from './types'

export function BrandMicroData({ data }: BrandMicroDataProps) {
  return SeoServiceFactory.getInstance('brand', data)
}
