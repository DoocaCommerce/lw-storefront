interface dc_config {
  token: string
  api_url: string
  domain: string
  mock?: {
    apps?: any
    cart?: any
    sections?: any
    settings?: any
    scripts?: any
    shop?: any
    showcase?: any
  }
}

declare var dc_config: dc_config
