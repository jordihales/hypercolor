import {
  conicDirections,
  primaryDirections,
  radialDirections,
} from '@/assets/data/directionOptions'

export function getDirections() {
  return [...primaryDirections, ...conicDirections, ...radialDirections]
}

export function getDirectionClasses() {
  return getDirections().map(({ css: gradientCss }) => gradientCss)
}
