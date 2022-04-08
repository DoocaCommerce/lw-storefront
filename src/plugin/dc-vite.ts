export function doocaPlugin(dcConfig) {
  return {
    name: 'vite-plugin-dooca',
    config(config, { command }) {
      if (!dcConfig) throw new Error('dooca config is required')

      config.define = {
        ...config.define,
        DC_CONFIG: {
          token: JSON.stringify(dcConfig.token)
        }
      }
    }
  }
}
