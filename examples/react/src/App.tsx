import { useEffect } from 'react'
import { useSettings, Sections, useSections } from 'lw-storefront/lib/react'
import Html from './components/html'

const components = {
  html: Html
}

function App() {
  const setting = useSettings()
  const sections = useSections()

  return (
    <div className="App">
      <h1>Teste {setting && setting.contactEmail}</h1>
      <Sections components={components} />
    </div>
  )
}

export default App
