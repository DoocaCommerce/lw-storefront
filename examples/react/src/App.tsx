import { useEffect } from 'react'
import { useSettings, Sections, useSections } from 'lw-storefront/lib/react'
import Html from './components/html'

const components = {
  html: Html
}

import { services } from 'lw-storefront/lib/core'

const { brand, category, cart, pages, sections, settings } = services

const get = async (id: string) => {
  const result = await settings.getSettings()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const resultAdd = await cart.addItem({items: [{"variation_id": 75053, "quantity": 1}]}, ['id', 'token', 'address', 'items'])
      const items = resultAdd.items!
      const token = resultAdd.token!
      const resultUpdate = await cart.updateItem({item: {"id": items[0].id || 0, "quantity": 4}, cartToken: token})
      console.log("Add", resultAdd, "Update", resultUpdate)
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
      <h1>Teste {setting && setting.contactEmail}</h1>
      <Header />
      {/* <Sections components={components} /> */}
    </div>
  )
}

export default App
