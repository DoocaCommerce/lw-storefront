import * as React from 'react'
import { Suspense } from 'react'
import { SectionLoaderProps } from './types'

export function SectionLoader(props: SectionLoaderProps) {
  const fallBack = () => 'errroouuuuu!!!!'
  const DynamicComponent = props.schema || fallBack

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent settings={props.settings} blocks={props.blocks} />
    </Suspense>
  )
}
