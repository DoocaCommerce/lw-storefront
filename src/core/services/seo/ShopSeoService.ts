import { SeoService } from './SeoService'
import { ShopMicroData } from './types'
import { Shop } from '../../types/ShopTypes'

export class ShopSeoService extends SeoService {
  shop: Shop

  constructor(data: Shop) {
    super()
    this.shop = data
  }

  public getShop(): string {
    let microData: ShopMicroData = {
      '@context': 'http://schema.org',
      '@type': 'Store',
      name: this.shop.name
    }
    if (this.shop.description) microData.description = this.shop.description

    if (this.shop.phone) microData.telephone = this.shop.phone

    if (this.shop.email) microData.email = this.shop.email

    if (this.shop.domain) {
      microData.url = `https://${this.shop.domain}`
    }

    if (this.shop.zipcode)
      microData.address = {
        '@type': 'PostalAddress',
        streetAddress: `${this.shop.street} ${this.shop.number} ${this.shop.detail ?? null}`,
        addressLocality: `${this.shop.district} - ${this.shop.city}`,
        addressRegion: this.shop.state,
        addressCountry: 'Brasil',
        postalCode: this.shop.zipcode
      }

    return this.render(microData)
  }
}
