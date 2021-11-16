/// <reference types="react" />
export interface SectionLoaderProps {
    schema: String;
    settings?: Object;
    blocks?: Object[];
}
declare const SectionLoader: (props: SectionLoaderProps) => JSX.Element;
export default SectionLoader;
