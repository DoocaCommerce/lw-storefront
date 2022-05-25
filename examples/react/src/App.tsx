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
      const result = await brand.getBrandList({page: 1, first: 3})
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
