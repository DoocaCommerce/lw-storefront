import { useEffect } from 'react'
import { useSettings } from 'lw-storefront/lib/react/hooks/use-settings'

function App() {
  const setting = useSettings()
  useEffect(() => {
    console.log(setting)
  }, [setting])
  return <div className="App">Teste </div>
}

export default App
