import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { socket } from '../../../core'
import { updateSections } from '../../store/modules/sections'
import { updateSettings } from '../../store/modules/settings'
import config from '../../routes/config'

function RootProvider(props) {
  const routerElement = useRoutes(config(props.routes))
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const dispatch = useDispatch()

  function onUpdate({ shopID, data }) {
    if (data) {
      dispatch(updateSettings(data?.settings))
      dispatch(updateSections(data?.sections))
    }
  }

  if (hashPreview) {
    socket.create(hashPreview, onUpdate)
  }

  return <>{routerElement}</>
}

export default RootProvider
