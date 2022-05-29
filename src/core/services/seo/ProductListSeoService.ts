import { ProductSeoServiceBase } from './ProductSeoServiceBase'
import { Product } from '../../types/product/ProductTypes'
import { ProductListMicroData, ProductListMicroDataItem } from './types'

export class ProductListSeoService extends ProductSeoServiceBase {
  products: Product[]

  constructor(data: Product[]) {
    super()
    this.products = data
  }

  public getProductList(): string {
    let microData: ProductListMicroData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: []
    }
    this.products.forEach((product: Product, index: number) => {
      let listItem: ProductListMicroDataItem = {
        '@type': 'ListItem',
        position: index + 1,
        item: this.getProductData(product)
      }
      microData.itemListElement.push(listItem)
    })
    return this.render(microData)
  }
}
