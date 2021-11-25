import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../../store/configure-store'

export function StoreProvider(props) {
  return <Provider store={store}>{props.children}</Provider>
}
