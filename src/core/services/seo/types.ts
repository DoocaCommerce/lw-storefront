interface MicroData {
  '@type': string
  '@context'?: string
}

export interface BrandMicroData extends MicroData {
  name: string
  logo: string
  image: string
  url: string
}

export interface ProductListMicroData extends MicroData {
  itemListElement: ProductListMicroDataItem[]
}

export interface ProductListMicroDataItem extends MicroData {
  position: number
  item: ProductMicroData
}

export interface ProductMicroData extends MicroData {
  url: string
  name: string
  sku: string
  description: string
  offers: OfferMicroData
  image?: string[]
  brand?: BrandMicroData
  category?: string
  weight?: QuantitativeValueMicroData
  width?: QuantitativeValueMicroData
  height?: QuantitativeValueMicroData
  depth?: QuantitativeValueMicroData
  gtin13?: string
  color?: string
  npm?: string
}

interface OfferMicroData extends MicroData {
  url: string
  priceCurrency: string
  priceValidUntil: string
  price: number
  lowPrice: number
  highPrice: number
  offerCount: number
  itemCondition: string
  availability: string
}

interface QuantitativeValueMicroData extends MicroData {
  value: number
  unitCode: string
}

export interface PostListMicroData extends MicroData {
  itemListElement: PostListMicroDataItem[]
}

export interface PostListMicroDataItem extends MicroData {
  position: number
  item: PostMicroData
}

export interface PostMicroData extends MicroData {
  url: string
  headline: string
  name: string
  dateCreated: string
  datePublished: string
  dateModified: string
  inLanguage: string
  articleSection: string
  articleBody: string
  image?: string
}

export interface ShopMicroData extends MicroData {
  name: string
  description?: string
  telephone?: string
  email?: string
  url?: string
  address?: AddressMicroData
}

interface AddressMicroData extends MicroData {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  addressCountry: string
  postalCode: string
}

export interface PageMicroData extends MicroData {
  url?: string
  name?: string
  description?: string
  mainEntity?: MainEntity[]
}

interface MainEntity extends MicroData {
  name: string
  acceptedAnswer: AcceptedAnswer
}

interface AcceptedAnswer extends MicroData {
  text: string
}

export interface SomeProductsMicroData extends MicroData {
  name?: string
  description?: string
}
