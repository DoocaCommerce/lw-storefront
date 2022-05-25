import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import { BrandService } from './modules/brand/BrandService'
import { SectionsService }from './modules/sections/SectionsService'
import { SettingsService } from './modules/settings/SettingsService'
import Socket from './socket'

export const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export const services = {
  brand: BrandService,
  sections: SectionsService,
  settings: SettingsService
}

export const socket = {
  ...Socket
}
