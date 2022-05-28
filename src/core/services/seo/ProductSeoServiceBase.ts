import { Product } from '../../types/product/ProductTypes'
import { SeoService } from './SeoService'
import { ProductMicroData } from './types'

export class ProductSeoServiceBase extends SeoService {
  protected getProductData(product: Product): ProductMicroData {
    let data: ProductMicroData = {
      '@type': 'Product',
      url: product.url,
      name: product.name,
      sku: String(product.id),
      description: product.name,
      offers: {
        '@type': 'AggregateOffer',
        url: product.url,
        priceCurrency: 'BRL',
        priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
        price: product.price,
        lowPrice: product.min_price_range,
        highPrice: product.max_price_range,
        offerCount: product.variations.length ?? 1,
        itemCondition: 'http://schema.org/NewCondition',
        availability: `http://schema.org/${product.balance > 1 ? 'InStock' : 'OutOfStock'}`
      }
    }

    if (product.images.length) {
      product.images.forEach(function (image) {
        data.image = []
        data.image.push(image.src)
      })
    }

    let billetTotal = product.payments.billet.total ?? null
    if (billetTotal < product.min_price_range) {
      data.offers.price = billetTotal
      data.offers.lowPrice = billetTotal
    }

    if (product.description) data.description = this.formatRichText(product.description)

    if (product.brand) {
      data.brand = {
        '@type': 'Brand',
        name: product.brand.name,
        logo: product.brand.image.src,
        image: product.brand.image.src,
        url: product.brand.url
      }
      if (product.brand.image) data.brand.image = product.brand.image.src
    }

    if (product.category.name) data.category = product.category.name

    if (product.weight)
      data.weight = {
        '@type': 'QuantitativeValue',
        value: product.weight,
        unitCode: 'kg'
      }

    if (product.width)
      data.width = {
        '@type': 'QuantitativeValue',
        value: product.width,
        unitCode: 'cm'
      }

    if (product.height)
      data.height = {
        '@type': 'QuantitativeValue',
        value: product.height,
        unitCode: 'cm'
      }

    if (product.depth)
      data.depth = {
        '@type': 'QuantitativeValue',
        value: product.depth,
        unitCode: 'cm'
      }

    if (product.variation.gtin) data.gtin13 = product.variation.gtin
    if (product.variation.color) data.color = product.variation.color.name
    if (product.variation.sku) data.sku = product.variation.sku

    return data
  }
}
