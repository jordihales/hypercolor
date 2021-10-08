export function getColor (element) {
  return getComputedStyle(element).getPropertyValue('background-color')
}

export function getRGBA (color) {
  return color.replace('rgb', 'rgba').replace(')', ', 0)')
}
