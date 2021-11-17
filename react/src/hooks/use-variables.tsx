import { slugify } from '@tray-storefront/core/dist/helpers/stringHelper.js'

export default function useVariable(ref?: any) {
  const element = ref?.current || document.documentElement

  function setVariables(variables: object) {
    Object.entries(variables).map(([name, value]) => {
      element.style.setProperty(`--${slugify(name)}`, value)
    })
  }

  return { setVariables }
}
