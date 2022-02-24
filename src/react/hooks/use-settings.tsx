import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../types/RootState'
import { SettingsState } from '../store/modules/settings/type'
import { getSettings } from '../store/modules/settings'

export function useSettings(): SettingsState {
  const dispatch = useDispatch()
  const settings = useSelector((state: RootState) => state.settings)

  useEffect(() => {
    if (Object.keys(settings?.data).length === 0) {
      dispatch(getSettings())
    }
  }, [dispatch])

  return settings
}
