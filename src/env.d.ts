interface dc_config {
  token: string
  api_url: string
  domain: string
  mock?: {
    sections?: any
    settings?: any
    showcase?: any
  }
}

declare var dc_config: dc_config
