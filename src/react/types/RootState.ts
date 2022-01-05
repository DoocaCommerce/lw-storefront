import { SectionsState } from '@react/store/modules/sections/type'
import { SettingsState } from '@react/store/modules/settings/type'
import { CartResumeState } from '@react/store/modules/cart-resume/type'

export interface RootState {
  settings: SettingsState
  sections: SectionsState
  cartResume: CartResumeState
}
