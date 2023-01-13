export const IconNames = {
   arrowLeft: 'arrow-left',
   arrowRight: 'arrow-right',
   chevronDown: 'chevron-down',
   heart: 'heart',
   heartFilled: 'heart-filled',
   search: 'search'
} as const;

type IconNamesTypes = typeof IconNames[keyof typeof IconNames];

export default IconNamesTypes