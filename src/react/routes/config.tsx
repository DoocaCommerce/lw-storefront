import * as React from 'react'
import type { RouteObject } from 'react-router-dom'
import defaultRoutes from './default-routes'

const routesConfig = (pages, newRoutes = {}) => {
  const routes = Object.assign(defaultRoutes, newRoutes)
  const Layout = pages['layout']
  const Home = pages[routes.home.component]
  const Category = pages[routes.category.component]
  const Product = pages[routes.product.component]
  const Brand = pages[routes.brand.component]
  const LandingPage = pages[routes.landingpage.component]
  const Institutional = pages[routes.institutional.component]
  const Blog = pages[routes.blog.component]
  const BlogPost = pages[routes.blogPost.component]

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
