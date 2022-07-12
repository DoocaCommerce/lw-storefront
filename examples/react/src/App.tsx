import { useEffect } from 'react'
import { useSettings, Sections, useSections, useShop } from 'lw-storefront/lib/react'
import Html from './components/html'

const components = {
  html: Html
}

import { services } from 'lw-storefront/lib/core'

const {
  apps,
  blogCategory,
  blogPost,
  brand,
  cart,
  category,
  landingPages,
  menu,
  pages,
  scripts,
  sections,
  settings,
  showcase
} = services

const get = async (id: string) => {
  const result = await settings.getOne()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await scripts.getScriptsByLocation('header')
      console.log(result)
    }
    get('header')
  }, [])
  return <h1>Hello </h1>
}

function App() {
  const setting = useSettings()
  const sections = useSections()
  const shop = useShop()

  return (
    <div className="App">
      <h1>Settings {setting && setting.contactEmail}</h1>
      <h1>Shop {shop && shop.name}</h1>
      <Sections components={components} />
    </div>
  )
}

export default App
