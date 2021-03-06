import * as React from 'react'
import type { RouteObject } from 'react-router-dom'
import defaultRoutes from './default-routes'

const routesConfig = (pages, newRoutes = {}) => {
  const routes = Object.assign(defaultRoutes, newRoutes)
  const Layout = pages['layout']

  const getChildren = () => {
    const children = Object.entries(routes).map(([id, item]) => {
      const Component = pages[item.component]

      return {
        index: id === 'home',
        path: item?.path ?? null,
        element: (
          <React.Suspense fallback="loading...">
            <Component />
          </React.Suspense>
        )
      }
    })

    return children
  }

  return [
    {
      path: '/',
      element: (
        <React.Suspense fallback="loading...">
          <Layout />
        </React.Suspense>
      ),
      children: getChildren()
    }
  ]
}

export default routesConfig
