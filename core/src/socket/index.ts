import createSocket from './createSocket'
import updateSettingsData from './updateSettingsData'
import focusSection from './focusSection'

export default {
  create(hashPreview, store) {
    createSocket(hashPreview, updateSettingsData(store), focusSection)
  }
}
