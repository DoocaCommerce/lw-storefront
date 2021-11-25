import { fetchSettings } from './SettingsRepository'

async function get() {
  const result = await fetchSettings()
  return result
}

export default {
  get
}
