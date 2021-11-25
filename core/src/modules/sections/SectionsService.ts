import { fetchSections } from './SectionsRepository'

async function get() {
  const result = await fetchSections()
  return result
}

export default {
  get
}
