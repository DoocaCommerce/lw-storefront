import { slugify } from '../../core/helpers/stringHelper'
import { useCallback, useRef } from 'react'

export function useVariable() {
  const ref = useRef(null)

  const setVariables = (variables: object) => {
    const element = ref?.current || document.documentElement
    Object.entries(variables).map(([name, value]) => {
      element.style.setProperty(`--${slugify(name)}`, value)
    })
  }

  const setRef = useCallback(element => {
    ref.current = element
  }, [])

  return { setVariables, setRef }
}
