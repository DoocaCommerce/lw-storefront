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
      {sectionsList.map(([id, { schema, blocks, settings, type }]): JSX.Element => {
        const component = components[schema]

        return (
          <React.Fragment key={id}>
            {type === 'content' && (
              <section data-section-id={id}>
                <SectionLoader id={id} component={component} settings={settings} blocks={blocks} />
              </section>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}
