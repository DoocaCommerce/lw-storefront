import createSocket from './core/socket/createSocket'
import updateSettingsData from './core/socket/updateSettingsData'
import focusSection from './core/socket/focusSection'
import stringHelper from './core/helpers/stringHelper'
import styleHelper from './core/helpers/styleHelper'
import viewportHelper from './core/helpers/viewportHelper'

import Sections from './components/Sections.vue'
import SectionLoader from './components/SectionLoader.vue'
import RootVars from './components/RootVars.vue'

import themeStoreModule from './store/themeStoreModule'

import BrandService from './core/services/BrandService'

export default {
  install: app => {
    const store = app.config.globalProperties.$store
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')

    store.registerModule('theme', themeStoreModule)
    app.component('Sections', Sections)
    app.component('SectionLoader', SectionLoader)
    app.component('RootVars', RootVars)
    // HttpInstall(store)
    store.dispatch('theme/getSettingsData')

    if (hashPreview) {
      createSocket(hashPreview, updateSettingsData(store), focusSection)
    }

    console.log('service ==>', BrandService.get())
    BrandService.getById(32992)
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
