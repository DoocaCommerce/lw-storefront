interface dc_config {
  token: string
  api_url: string
  domain: string
  mock?: {
    apps?: any
    cart?: any
    blogCategory?: any
    blogPost?: any
    brand?: any
    landing_pages?: any
    menu?: any
    pages?: any
    sections?: any
    settings?: any
    scripts?: any
    shop?: any
    showcase?: any
  }
}

declare var dc_config: dc_config
