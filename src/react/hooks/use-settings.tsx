import { useEffect, useState } from 'react'
import { SettingsState } from '../store/modules/settings/type'
import { services, socket } from '../../core'

export function useSettings(): any {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [settings, setSettings] = useState<any>()

  const getSettings = async () => {
    const result = await services.settings.getSettings()
    setSettings(result)
  }

  function onUpdate({ shopID, data }) {
    if (data) {
      setSettings(data?.settings)
      // dispatch(updateSections(data?.sections))
    }
  }

  if (hashPreview) {
    socket.create(hashPreview, onUpdate)
  }

  useEffect(() => {
    getSettings()
  }, [])

  return settings
}
