import { loadEnv } from 'vite'

export function doocaPlugin(dcConfig) {
  return {
    name: 'vite-plugin-dooca',
    config(config, options) {
      if (!dcConfig) throw new Error('dooca config is required')

      process.env = { ...process.env, ...loadEnv(options.mode, process.cwd()) }

      config.define = {
        ...config.define,
        dc_config: {
          api_url: process.env.VITE_API_URL,
          token: dcConfig.token,
          domain: dcConfig.domain,
          mock: dcConfig.mock || null
        }
      }
    }
  }
}
