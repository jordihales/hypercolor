import {
  primaryDirections,
  conicDirections,
  radialDirections,
} from '@/assets/data/directionOptions'

export function getDirections() {
  return [...primaryDirections, ...conicDirections, ...radialDirections]
}

export function getDirectionClasses() {
  return getDirections().map(function (gradientDirection) {
    return gradientDirection.css
  })
}
