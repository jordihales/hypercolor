/* eslint-disable space-before-function-paren */

export function getBackgroundColor(element) {
  return getComputedStyle(element).getPropertyValue('background-color')
}

export function getBackgroundImage(element) {
  return getComputedStyle(element).getPropertyValue('background-image')
}

export function convertToRgba(color) {
  return color.replace('rgb', 'rgba').replace(')', ', 0)')
}
