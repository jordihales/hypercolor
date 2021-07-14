export const directions = {
  t: 'bg-gradient-to-t',
  b: 'bg-gradient-to-b',
  l: 'bg-gradient-to-l',
  r: 'bg-gradient-to-r',
  tl: 'bg-gradient-to-tl',
  tr: 'bg-gradient-to-tr',
  bl: 'bg-gradient-to-bl',
  br: 'bg-gradient-to-br',
}

export const conicDirections = {
  c: 'bg-gradient-conic',
  t: 'bg-gradient-conic-t',
  b: 'bg-gradient-conic-b',
  l: 'bg-gradient-conic-l',
  r: 'bg-gradient-conic-r',
  tl: 'bg-gradient-conic-tl',
  tr: 'bg-gradient-conic-tr',
  bl: 'bg-gradient-conic-bl',
  br: 'bg-gradient-conic-br',
}

export const radialDirections = {
  c: 'bg-gradient-radial',
  t: 'bg-gradient-radial-at-t',
  b: 'bg-gradient-radial-at-b',
  l: 'bg-gradient-radial-at-l',
  r: 'bg-gradient-radial-at-r',
  tl: 'bg-gradient-radial-at-tl',
  tr: 'bg-gradient-radial-at-tr',
  bl: 'bg-gradient-radial-at-bl',
  br: 'bg-gradient-radial-at-br',
}

export const chevronDirections = {
  t: '',
  b: 'rotate-180',
  l: '-rotate-90',
  r: 'rotate-90',
  tl: '-rotate-45',
  tr: 'rotate-45',
  bl: '-rotate-135',
  br: 'rotate-135',
}

function combineDirections() {
  const allDirections = [Object.values(directions), Object.values(conicDirections), Object.values(radialDirections)]

  return allDirections.flat()
}

export const allDirections = combineDirections()

export function getDirections(theme) {
  if (theme === 'Conic') {
    return conicDirections
  } else if (theme === 'Radial') {
    return radialDirections
  } else {
    return directions
  }
}
