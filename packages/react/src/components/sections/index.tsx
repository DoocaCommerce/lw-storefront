import * as React from 'react'
import { SectionLoader } from '../section-loader'

export interface SectionsPropsType {
  sections: Object
  path?: string
}

export function Sections({ sections, path = 'sections' }: SectionsPropsType): JSX.Element {
  const renderSections = () => {
    return Object.keys(sections).map((index): JSX.Element => {
      const { schema, blocks, settings } = sections[index]

      return <SectionLoader path={path} schema={schema} settings={settings} blocks={blocks} key={index} />
    })
  }

  return <>{renderSections()}</>
}
