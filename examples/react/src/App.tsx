import { useEffect } from 'react'
import { services } from 'lw-storefront/lib/core'

const { brand, category, sections, settings } = services

const get = async (id: string) => {
  const result = await settings.getSettings()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await category.getCategoryBySlug('bolsas-femininas')
      console.log(`result ${id}`, result)
    }
    get('header')
  }, [])
  return <h1>Hello </h1>
}

function App() {
  useEffect(() => {
    get('app')
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
