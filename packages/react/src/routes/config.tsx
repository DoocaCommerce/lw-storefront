import * as React from 'react'
import type { RouteObject } from 'react-router'
import defaultRoutes from './default-routes.json'

function importPage(page: string) {
  return React.lazy(() => import(`/@pages/${page}.tsx`).catch(console.log))
}

const routesConfig = (newRoutes = {}) => {
  const routes = Object.assign(defaultRoutes, newRoutes)
  const Layout = importPage('layout')
  const Home = importPage(routes.home.component)
  const Category = importPage(routes.category.component)
  const Product = importPage(routes.product.component)
  const Brand = importPage(routes.brand.component)
  const LandingPage = importPage(routes.landingpage.component)
  const Institutional = importPage(routes.institutional.component)
  const Blog = importPage(routes.blog.component)
  const BlogPost = importPage(routes.blogPost.component)

  return [
    {
      path: '/',
      element: (
        <React.Suspense fallback="loading...">
          <Layout />
        </React.Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback="loading...">
              <Home />
            </React.Suspense>
          )
        },
        {
          path: routes.category.path,
          element: (
            <React.Suspense fallback="loading...">
              <Category />
            </React.Suspense>
          )
        },
        {
          path: routes.product.path,
          element: (
            <React.Suspense fallback="loading...">
              <Product />
            </React.Suspense>
          )
        },
        {
          path: routes.brand.path,
          element: (
            <React.Suspense fallback="loading...">
              <Brand />
            </React.Suspense>
          )
        },
        {
          path: routes.institutional.path,
          element: (
            <React.Suspense fallback="loading...">
              <Institutional />
            </React.Suspense>
          )
        },
        {
          path: routes.landingpage.path,
          element: (
            <React.Suspense fallback="loading...">
              <LandingPage />
            </React.Suspense>
          )
        },
        {
          path: routes.blog.path,
          element: (
            <React.Suspense fallback="loading...">
              <Blog />
            </React.Suspense>
          )
        },
        {
          path: routes.blogPost.path,
          element: (
            <React.Suspense fallback="loading...">
              <BlogPost />
            </React.Suspense>
          )
        }
      ]
    }
  ]
}

export default routesConfig
