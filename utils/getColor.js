export function getBackgroundColor(targetEl) {
  return getComputedStyle(targetEl).getPropertyValue('background-color')
}

export function getBackgroundImage(targetEl) {
  return getComputedStyle(targetEl).getPropertyValue('background-image')
}

export function convertToRgba(targetColor) {
  return targetColor.replace('rgb', 'rgba').replace(')', ', 0)')
}
