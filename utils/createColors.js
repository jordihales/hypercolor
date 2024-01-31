import {
  themeColorShades,
  themeColors,
  themeColorsWithoutShades,
} from '@/assets/data/tailwindColors'

export function createColorClasses(classPrefix) {
  return themeColors.flatMap((tailwindColor) => {
    if (themeColorsWithoutShades.includes(tailwindColor))
      return `${classPrefix}-${tailwindColor}`

    return themeColorShades.flatMap((tailwindColorShade) => {
      return `${classPrefix}-${tailwindColor}-${tailwindColorShade}`
    })
  })
}
