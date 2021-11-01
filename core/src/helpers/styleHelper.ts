import * as WebFont from 'webfontloader'
import { formatKebabCase } from './stringHelper'
const fonts = {}

function parseRootVars(variables) {
  const varList = Object.entries(variables)
  const rootVars = varList.reduce((root, [key, value]) => `${root} --theme-${formatKebabCase(key)}: ${value};`, '')

  return `:root{ ${rootVars} }`
}

function fontLoader(font) {
  if (!font) return ''

  const { family, category, font_weight } = font
  const fontLoad = `${family}:${font_weight}`
  const fontFamily = `${family}, ${category}`

  if (fonts[fontLoad]) return fontFamily

  WebFont.load({
    google: {
      families: [fontLoad]
    }
  })

  fonts[fontLoad] = true

  return fontFamily
}

export default { parseRootVars, fontLoader }
