import { ShopSeoService } from './ShopSeoService'
import { ProductSeoService } from './ProductSeoService'
import { BrandSeoService } from './BrandSeoService'
import { PageSeoService } from './PageSeoService'
import { BlogSeoService } from './BlogSeoService'

export class SeoServiceFactory {
  static getInstance(type: string, data: any) {
    switch (type) {
      case 'shop':
        return new ShopSeoService(data).getShop()
      case 'product-item':
        return new ProductSeoService(data).getProductItem()
      case 'product-list':
        return new ProductSeoService(data).getProductList()
      case 'brand':
        return new BrandSeoService(data).getBrand()
      case 'page':
        return new PageSeoService(data).getPage()
      case 'blog-category':
        return new BlogSeoService(data).getBlogCategory()
      case 'blog-post':
        return new BlogSeoService(data).getBlogPost()
      default:
        break
    }
  }
}
