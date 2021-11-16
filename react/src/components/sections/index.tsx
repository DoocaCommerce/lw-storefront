import SectionLoader from '../section-loader'

export interface SectionsPropsType {
  sections: Object
}

const Sections = (props: SectionsPropsType): JSX.Element => {
  const renderSections = () => {
    return Object.keys(props.sections).map((index): JSX.Element => {
      console.log(index)

      return <SectionLoader schema={index} />
    })
  }

  return <>{renderSections()}</>
}

export default Sections
