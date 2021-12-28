import createSocket from './createSocket'
import focusSection from './focusSection'

export default {
  create(hashPreview, onUpdate) {
    createSocket(hashPreview, onUpdate, focusSection)
  }
}
