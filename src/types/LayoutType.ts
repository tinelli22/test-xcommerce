const layouts = {
   columns: 'columns',
   line: 'line'
} as const;

type LayoutTypes = typeof layouts[keyof typeof layouts];

export default LayoutTypes;