import { SeoService } from './SeoService'
import { Brand } from '../../types/product/BrandTypes'
import { BrandMicroData } from './types'

export class BrandSeoService extends SeoService {
  data: Brand

  constructor(data: Brand) {
    super()
    this.data = data
  }

  public getBrand(): JSX.Element {
    let brand = this.data
    let microData: BrandMicroData = {
      '@context': 'https://schema.org',
      '@type': 'Brand',
      name: brand.name,
      logo: brand.image.src,
      image: brand.image.src,
      url: brand.url
    }

    return this.render(microData)
  }
}
