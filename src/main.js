import socket from '../core/dist/socket'
import stringHelper from '../core/dist/helpers/stringHelper'
import styleHelper from '../core/dist/helpers/styleHelper'
import viewportHelper from '../core/dist/helpers/viewportHelper'

import Sections from './components/Sections.vue'
import SectionLoader from './components/SectionLoader.vue'
import RootVars from './components/RootVars.vue'

import themeStoreModule from './store/themeStoreModule'
import brand from '../core/dist/modules/brand/BrandService'

export default {
  install: app => {
    const store = app.config.globalProperties.$store
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')

    store.registerModule('theme', themeStoreModule)
    app.component('Sections', Sections)
    app.component('SectionLoader', SectionLoader)
    app.component('RootVars', RootVars)
    store.dispatch('theme/getSettingsData')

    if (hashPreview) {
      socket.create(hashPreview, store)
    }

    brand.getById(32991).then(result => {
      console.log(result)
    })
  }
}

const sectionMixin = {
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
    blocks: {
      type: Array,
      default: () => []
    }
  }
}

const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export { helpers, sectionMixin }
