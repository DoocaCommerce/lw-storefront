import { useEffect } from 'react'
import { useSettings, useSections, useCart } from 'lw-storefront/lib/react'
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
      const result = await scripts.getListByLocation('header')
      console.log(result)
    }
    get('header')
  }, [])
  return <h1>Hello </h1>
}

function App() {
  useEffect(() => console.log('salve'))

  const cart = useCart()

  cart.addItem([
    {
      variation_id: 9467663,
      quantity: 1
    }
  ])

  console.log(cart.data)

  return <div className="App"></div>
}

export default App
