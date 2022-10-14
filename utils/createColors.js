import {
  themeColors,
  themeColorShades,
  themeColorsWithoutShades,
} from '@/assets/data/tailwindColors'

export function createColorClasses(classPrefix) {
  return themeColors.flatMap(function (tailwindColor) {
    if (themeColorsWithoutShades.includes(tailwindColor)) {
      return `${classPrefix}-${tailwindColor}`
    }

    return themeColorShades.flatMap(
      (tailwindColorShade) =>
        `${classPrefix}-${tailwindColor}-${tailwindColorShade}`
    )
  })
}
