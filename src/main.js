import createSocket from './socket/createSocket'
import updateSettingsData from './socket/updateSettingsData'
import focusSection from './socket/focusSection'
import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import Sections from './components/Sections.vue'
import SectionLoader from './components/SectionLoader.vue'
import RootVars from './components/RootVars.vue'

import themeStoreModule from './store/themeStoreModule'

import { install as HttpInstall } from './services/HttpRequest'
import BrandService from './services/BrandService'
import CategoryService from './services/CategoryService'
import ProductService from './services/ProductService'
import PageService from './services/PageService'
import ShopService from './services/ShopService'
import CartService from './services/CartService'
import CustomerService from './services/CustomerService'
import PostService from './services/PostService'

export default {
  install: app => {
    // app.config.globalProperties.$api = HttpRequest
    const store = app.config.globalProperties.$store
    const urlParams = new URLSearchParams(window.location.search)
    const hashPreview = urlParams.get('preview')

    store.registerModule('theme', themeStoreModule)
    app.component('Sections', Sections)
    app.component('SectionLoader', SectionLoader)
    app.component('RootVars', RootVars)
    HttpInstall(store)
    store.dispatch('theme/getSettingsData')

    if (hashPreview) {
      createSocket(hashPreview, updateSettingsData(store), focusSection)
    }
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

const api = {
  brands: BrandService,
  products: ProductService,
  categories: CategoryService,
  pages: PageService,
  shop: ShopService,
  cart: CartService,
  customers: CustomerService,
  posts: PostService
}

const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export { api, helpers, sectionMixin }
