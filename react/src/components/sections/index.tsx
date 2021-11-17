import { SectionLoader } from '../section-loader'

export interface SectionsPropsType {
  sections: Object
}

export function Sections({ sections }: SectionsPropsType): JSX.Element {
  const renderSections = () => {
    return Object.keys(sections).map((index): JSX.Element => {
      const { schema, blocks, settings } = sections[index]

      return <SectionLoader schema={schema} settings={settings} blocks={blocks} key={index} />
    })
  }

  return <>{renderSections()}</>
}
