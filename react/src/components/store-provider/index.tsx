import * as React from 'react'
import { Provider, useDispatch } from 'react-redux'
import { socket } from '@tray-storefront/core'
import store from '../../store/configure-store'
import { updateSettings } from '../../store/modules/settings'
import { updateSections } from '../../store/modules/sections'

function RootProvider(props) {
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

  return <>{props.children}</>
}

export function StoreProvider(props) {
  return (
    <Provider store={store}>
      <RootProvider>{props.children}</RootProvider>
    </Provider>
  )
}