export const directionOptions = [
  {
    key: 'top',
    chevron: '',
    gradient: 'bg-gradient-to-t',
    radial: 'bg-radial-at-t',
    conic: 'bg-conic-to-t',
  },
  {
    key: 'bottom',
    chevron: 'rotate-180',
    gradient: 'bg-gradient-to-b',
    radial: 'bg-radial-at-b',
    conic: 'bg-conic-to-b',
  },
  {
    key: 'left',
    chevron: '-rotate-90',
    gradient: 'bg-gradient-to-l',
    radial: 'bg-radial-at-l',
    conic: 'bg-conic-to-l',
  },
  {
    key: 'right',
    chevron: 'rotate-90',
    gradient: 'bg-gradient-to-r',
    radial: 'bg-radial-at-r',
    conic: 'bg-conic-to-r',
  },
  {
    key: 'top-left',
    chevron: '-rotate-45',
    gradient: 'bg-gradient-to-tl',
    radial: 'bg-radial-at-tl',
    conic: 'bg-conic-to-tl',
  },
  {
    key: 'top-right',
    chevron: 'rotate-45',
    gradient: 'bg-gradient-to-tr',
    radial: 'bg-radial-at-tr',
    conic: 'bg-conic-to-tr',
  },
  {
    key: 'bottom-left',
    chevron: '-rotate-[135deg]',
    gradient: 'bg-gradient-to-bl',
    radial: 'bg-radial-at-bl',
    conic: 'bg-conic-to-bl',
  },
  {
    key: 'bottom-right',
    chevron: 'rotate-[135deg]',
    gradient: 'bg-gradient-to-br',
    radial: 'bg-radial-at-br',
    conic: 'bg-conic-to-br',
  },
  {
    key: 'center',
    chevron: '',
    gradient: '',
    radial: 'bg-radial',
    conic: 'bg-conic',
  },
]

export const primaryDirections = [
  {
    name: 'To Top',
    css: 'bg-gradient-to-t',
  },
  {
    name: 'To Top Right',
    css: 'bg-gradient-to-tr',
  },
  {
    name: 'To Right',
    css: 'bg-gradient-to-r',
  },
  {
    name: 'To Bottom Top',
    css: 'bg-gradient-to-br',
  },
  {
    name: 'To Bottom',
    css: 'bg-gradient-to-b',
  },
  {
    name: 'To Bottom Left',
    css: 'bg-gradient-to-bl',
  },
  {
    name: 'To Left',
    css: 'bg-gradient-to-l',
  },
  {
    name: 'To Top Left',
    css: 'bg-gradient-to-tl',
  },
]

export const conicDirections = [
  {
    name: 'Conic Center',
    css: 'bg-[conic-gradient(var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Top',
    css: 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Top Right',
    css: 'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Right',
    css: 'bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Bottom Right',
    css: 'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Bottom',
    css: 'bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Bottom Left',
    css: 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Left',
    css: 'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Conic Top Left',
    css: 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]',
  },
]

export const radialDirections = [
  {
    name: 'Radial Center',
    css: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Top',
    css: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Top Right',
    css: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Right',
    css: 'bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Bottom Right',
    css: 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Bottom',
    css: 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Bottom Left',
    css: 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Left',
    css: 'bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]',
  },
  {
    name: 'Radial Top Left',
    css: 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
  },
]
