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
  const cart = useCart()

  function addItem() {
    cart.addItem([
      {
        variation_id: 9467663,
        quantity: 1
      }
    ])

    console.log(cart.data)
  }

  function updateItem() {
    cart.updateItem({
      id: cart.data!.items![0].id,
      quantity: 4
    })

    console.log(cart.data)
  }

  function deleteItem() {
    cart.deleteItem({
      id: cart.data!.items![0].id
    })

    console.log(cart.data)
  }

  return (
    <div className="App">
      <button onClick={addItem}>Adicionar</button>
      <button onClick={updateItem}>Atualizar</button>
      <button onClick={deleteItem}>Deletar</button>
      <button onClick={() => console.log(cart.data)}>Consultar</button>
    </div>
  )
}

export default App
