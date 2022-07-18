import { useEffect } from 'react'
import { useSettings, Sections, useSections, useUser } from 'lw-storefront/lib/react'
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
  const user = useUser({ email: 'diovani@dooca.com.br', password: 'Teste123' })

  return (
    <div className="App">
      <h1>Teste {user && user.data.email}</h1>
      <Sections components={components} />
    </div>
  )
}

export default App
