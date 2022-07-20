import { useEffect } from 'react'
import { useSettings, Sections, useSections } from 'lw-storefront/lib/react'
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
  showcase,
  user
} = services

const get = async (id: string) => {
  const result = await settings.getSettings()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await user.doLogin({ email: 'diovani.dooca@gmail.com', password: 'Teste123' })
      console.log(`result ${id}`, result)
    }
    get('header')
  }, [])
  return <h1>Hello </h1>
}

function App() {
  const setting = useSettings()
  const sections = useSections()

  return (
    <div className="App">
      <Header />
      {/* <h1>Teste {setting && setting.contactEmail}</h1>
      <Sections components={components} /> */}
    </div>
  )
}

export default App
