import * as WebFont from 'webfontloader'
import { slugify } from './stringHelper'
const fonts = {}

function parseRootVars(variables) {
  const varList = Object.entries(variables)
  const rootVars = varList.reduce((root, [key, value]) => `${root} --theme-${slugify(key)}: ${value};`, '')

  return `:root{ ${rootVars} }`
}

function fontLoader(font: any) {
  if (font && font.family && font.fontWeight) {
    const { family, category, fontWeight } = font
    const fontLoad = family && fontWeight ? family + ':' + fontWeight : null
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
}

export default { parseRootVars, fontLoader }
