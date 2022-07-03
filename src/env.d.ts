interface dc_config {
  token: string
  api_url: string
  domain: string
  mock?: {
    apps?: any
    sections?: any
    settings?: any
  }
}

declare var dc_config: dc_config
