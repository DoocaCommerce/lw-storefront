import dev from './config.dev'
import prod from './config.prod'

const configDefault = {
  dev,
  prod
}

// process.env.NODE_ENV

export function storeFrontConfig() {
  console.log('env ===> ', process.env.NODE_ENV)

  return dev
}
