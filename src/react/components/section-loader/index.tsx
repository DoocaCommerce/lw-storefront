import * as React from 'react'
import { Suspense } from 'react'
import { SectionLoaderProps } from './types'

function importComponent(schema: string, path = 'sections') {
  return React.lazy(() =>
    import(
      /* webpackChunkName: "components" */
      /* webpackMode: "lazy-once" */
      /* webpackExports: ["default", "named"] */ `@/components/${path}/${schema}`
    ).catch(console.log)
  )
}

export function SectionLoader(props: SectionLoaderProps) {
  const DynamicComponent = importComponent(props.schema, props.path)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent settings={props.settings} blocks={props.blocks} />
    </Suspense>
  )
}
