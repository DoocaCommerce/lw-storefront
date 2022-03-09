import * as React from 'react'
import { SectionLoader } from '../section-loader'

type Obj = Record<string, any>
export interface SectionsPropsType {
  sections: Obj
  components: Obj
  path?: string
}

export function Sections({ sections, components }: SectionsPropsType): JSX.Element {
  const sectionsList = Object.entries(sections)

  return (
    <>
      {sectionsList.map(([id, { schema, blocks, settings, type, disabled }]): JSX.Element => {
        const component = components[schema]

        return (
          <React.Fragment key={id}>
            {type === 'content' && (
              <SectionLoader id={id} component={component} settings={settings} blocks={blocks} disabled={disabled} />
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}
