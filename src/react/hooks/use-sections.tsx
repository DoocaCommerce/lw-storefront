import { useEffect, useState } from 'react'
import { services, socket } from '../../core'
import { SectionsState } from '../store/modules/sections/type'

export function useSections(): SectionsState {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const [sections, setSections] = useState<any>()

  async function getSections() {
    const result = await services.sections.getSections()

    setSections(result.data)
  }

  function onUpdate({ shopID, data }) {
    if (data) {
      setSections(data?.sections)
    }
  }

  useEffect(() => {
    getSections()
    if (hashPreview) {
      socket.create(hashPreview, onUpdate)
    }
  }, [])

  return sections
}
