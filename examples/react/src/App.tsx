import { useEffect } from 'react'
import { useSettings, Sections, useSections, useCategory, useCategoryTree } from 'lw-storefront/lib/react'
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
  const result = await settings.getSettings()
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
  const category = useCategory({ slug: 'disco-rigido-hdd' })
  const categoryTree = useCategoryTree({ id: '1649' })

  return (
    <div className="App">
      <h1>Settings {setting && setting.contactEmail}</h1>
      <h1>Category {category && category.id}</h1>
      <h1>Category Tree {categoryTree && categoryTree[0].slug}</h1>
      <Sections components={components} />
    </div>
  )
}

export default App
