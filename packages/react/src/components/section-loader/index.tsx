import * as React from 'react'
import { Suspense } from 'react'
import { SectionLoaderProps } from './types'

function importComponent(schema: string, path = 'sections') {
  return React.lazy(() => import(`/@components/${path}/${schema}/index.tsx`).catch(console.log))
}

export function SectionLoader(props: SectionLoaderProps) {
  const DynamicComponent = importComponent(props.schema, props.path)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent settings={props.settings} blocks={props.blocks} />
    </Suspense>
  )
}
