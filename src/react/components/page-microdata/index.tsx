import { SeoServiceFactory } from '../../../core/services/seo/SeoServiceFactory'
import { PageMicroDataProps } from './types'

export function PageMicroData({ data }: PageMicroDataProps) {
  return SeoServiceFactory.getInstance('page', data)
}
