import { ProductSeoServiceBase } from './ProductSeoServiceBase'
import { Product } from '../../types/product/ProductTypes'
import { ProductMicroData } from './types'

export class ProductItemSeoService extends ProductSeoServiceBase {
  product: Product

  constructor(data: Product) {
    super()
    this.product = data
  }

  public getProductItem(): string {
    let microData: ProductMicroData = {
      '@context': 'https://schema.org',
      ...this.getProductData(this.product)
    }
    return this.render(microData)
  }
}
