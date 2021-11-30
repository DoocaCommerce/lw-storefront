import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSections } from '../store/modules/sections'
import { RootState } from '../@types/RootState'

export function useSections() {
  const dispatch = useDispatch()
  const sections = useSelector((state: RootState) => state.sections)

  useEffect(() => {
    if (Object.keys(sections?.data).length === 0 && !sections.loading) {
      dispatch(getSections())
    }
  }, [dispatch])

  return { sections }
}
