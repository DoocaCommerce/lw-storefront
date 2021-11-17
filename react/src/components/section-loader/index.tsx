import { lazy, Suspense } from 'react'

export interface SectionLoaderProps {
  schema: String
  settings?: Object
  blocks?: Object[]
}

export function SectionLoader(props: SectionLoaderProps): JSX.Element {
  const DynamicComponent = lazy(() => import(`/src/components/sections/${props.schema}/`))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent settings={props.settings} blocks={props.blocks} />
    </Suspense>
  )
}
