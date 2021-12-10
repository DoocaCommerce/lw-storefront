import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../../store/configure-store'
import RootProvider from './root-provider'

export function StoreProvider(props) {
  return (
    <Provider store={store}>
      <RootProvider>{props.children}</RootProvider>
    </Provider>
  )
}
