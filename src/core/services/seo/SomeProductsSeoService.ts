import { SeoService } from './SeoService'
import { SomeProductsProps } from '../../../react/components/product-microdata/types'
import { SomeProductsMicroData } from './types'

export class SomeProductsSeoService extends SeoService {
  data: SomeProductsProps

  constructor(data: SomeProductsProps) {
    super()
    this.data = data
  }

  public getSomeProducts(): string {
    let microData: SomeProductsMicroData = {
      '@context': 'https://schema.org',
      '@type': 'SomeProducts'
    }
    if (this.data.name) microData.name = this.data.name
    if (this.data.description) microData.description = this.data.description
    return this.render(microData)
  }
}
