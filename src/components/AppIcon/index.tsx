type SvgProp = {
    classExtension: string;
}

type IconTabProp = {
    classExtension?: string;
    type: string;
}

const svgEnum = {
    Check: 'check',
    ChevronUpDown: 'chevron-up-down'
}

const SVGCheck = ({ classExtension }: SvgProp) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classExtension}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const SvgChevronUpDown = ({ classExtension }: SvgProp) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classExtension}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>
)

const IconTab = ({ type, classExtension = '' }: IconTabProp) => {
    const base = "w-6 h-6"
    const svgSource = {
        [svgEnum.Check]: <SVGCheck classExtension={`${base} ${classExtension}`} />,
        [svgEnum.ChevronUpDown]: <SvgChevronUpDown classExtension={`${base} ${classExtension}`} />
    }
    return svgSource[type] || null
};
export default IconTab;