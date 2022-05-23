import { useEffect } from 'react'
import { services } from 'lw-storefront/lib/core'

const { brand, sections, settings } = services

const get = async (id: string) => {
  const result = await settings.getSettings()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await brand.getBrandBySlug('av', ["id" , "hotsite_id" , "external_id" , "name" , "slug" , "description" , "short_description" , "image"])
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
