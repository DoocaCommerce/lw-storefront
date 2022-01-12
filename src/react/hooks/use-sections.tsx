import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@react/types/RootState'
import { getSections } from '../store/modules/sections'
import { SectionsState } from '@react/store/modules/sections/type'

export function useSections(): SectionsState {
  const dispatch = useDispatch()
  const sections = useSelector((state: RootState) => state.sections)

  useEffect(() => {
    if (Object.keys(sections?.data).length === 0 && !sections.loading) {
      dispatch(getSections())
    }
  }, [dispatch])

  return sections
}
