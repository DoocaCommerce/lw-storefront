import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@react/types/RootState'
import { getSettings } from '../store/modules/settings'

export function useSettings() {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings)

  useEffect(() => {
    if (Object.keys(settings?.data).length === 0) {
      dispatch(getSettings())
    }
  }, [dispatch])

  return settings
}
