import { lazy, Suspense } from 'react'

export interface SectionLoaderProps {
  schema: String
  settings?: Object
  blocks?: Object[]
}

const SectionLoader = (props: SectionLoaderProps): JSX.Element => {
  const DynamicComponent = lazy(() => import(/* @vite-ignore */ `/src/components/sections/${props.schema}/`))

  console.log(props)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent settings={props.settings} blocks={props.blocks} />
    </Suspense>
  )
}

export default SectionLoader
