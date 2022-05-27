import { useEffect } from 'react'
import { useSettings } from 'lw-storefront/lib/react/hooks/use-settings'

import { services } from 'lw-storefront/lib/core'

const { brand, category, pages, sections, settings } = services

const get = async (id: string) => {
  const result = await settings.getSettings()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await pages.getPageList(['id', 'faq'])
      console.log(`result ${id}`, result)
    }
    get('header')
  }, [])
  return <h1>Hello </h1>
}

function App() {
  const setting = useSettings()
  useEffect(() => {
    console.log(setting)
  }, [setting])
  return <div className="App"><Header /></div>
}

export default App
