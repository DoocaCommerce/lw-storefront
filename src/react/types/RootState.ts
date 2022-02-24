import { SectionsState } from '../store/modules/sections/type'
import { SettingsState } from '../store/modules/settings/type'
import { CartResumeState } from '../store/modules/cart-resume/type'

export interface RootState {
  settings: SettingsState
  sections: SectionsState
  cartResume: CartResumeState
}
