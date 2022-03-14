import { ShopSeoService } from './ShopSeoService'
import { ProductItemSeoService } from './ProductItemSeoService'
import { ProductListSeoService } from './ProductListSeoService'
import { SomeProductsSeoService } from './SomeProductsSeoService'
import { BrandSeoService } from './BrandSeoService'
import { PageSeoService } from './PageSeoService'
import { BlogSeoService } from './BlogSeoService'

export class SeoServiceFactory {
  static getInstance(type: string, data: any): string {
    switch (type) {
      case 'shop':
        return new ShopSeoService(data).getShop()
      case 'product-item':
        return new ProductItemSeoService(data).getProductItem()
      case 'product-list':
        return new ProductListSeoService(data).getProductList()
      case 'some-products':
        return new SomeProductsSeoService(data).getSomeProducts()
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
