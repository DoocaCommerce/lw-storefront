import Webfont from 'webfontloader'
import { formatKebabCase } from './stringHelper'
const fonts = {}

export function parseRootVars(variables) {
  const varList = Object.entries(variables)
  const rootVars = varList.reduce((root, [key, value]) => `${root} --theme-${formatKebabCase(key)}: ${value};`, '')

  return `:root{ ${rootVars} }`
}

export function fontLoader(font) {
  if (!font) return ''

  const { family, category, font_weight } = font
  const fontLoad = `${family}:${font_weight}`
  const fontFamily = `${family}, ${category}`

  if (fonts[fontLoad]) return fontFamily

  Webfont.load({
    google: {
      families: [fontLoad]
    }
  })

  fonts[fontLoad] = true

  return fontFamily
}

export default { parseRootVars, fontLoader }
