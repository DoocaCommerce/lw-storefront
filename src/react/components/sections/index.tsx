import * as React from 'react'
import { SectionLoader } from '../section-loader'

type Obj = Record<string, any>
export interface SectionsPropsType {
  sections: Obj
  components: Obj
  path?: string
}

export function Sections({ sections, components, path = 'sections' }: SectionsPropsType): JSX.Element {
  const renderSections = () => {
    return Object.keys(sections).map((index: string): JSX.Element => {
      const { schema, blocks, settings, type } = sections[index]

      return (
        <>
          {type === 'content' && (
            <SectionLoader path={path} schema={components[schema]} settings={settings} blocks={blocks} />
          )}
        </>
      )
    })
  }

  return <>{renderSections()}</>
}
