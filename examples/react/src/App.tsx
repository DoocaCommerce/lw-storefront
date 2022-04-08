import { useEffect } from 'react'
import { services } from 'lw-storefront/lib/core'

const { settings, sections } = services

const get = async (id: string) => {
  const result = await settings.get()
  console.log(`result ${id}`, result)
}

function Header() {
  useEffect(() => {
    const get = async (id: string) => {
      const result = await sections.get()
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
