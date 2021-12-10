import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../../store/configure-store'
import RootProvider from './root-provider'

export function StoreProvider(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootProvider routes={props.routes} />
      </BrowserRouter>
    </Provider>
  )
}
