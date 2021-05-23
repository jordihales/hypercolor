import { gradients } from './gradients.js'

function getThemes() {
  const filteredThemes = gradients.filter((g, i, s) => s.findIndex((cg) => cg.theme === g.theme) === i)

  filteredThemes.unshift({
    theme: 'All',
    colors: 'bg-gradient-to-r from-green-400 to-green-600',
  })

  return filteredThemes
}

export function getTheme(name) {
  const themes = getThemes()

  return themes.find((theme) => theme.theme === name)
}

export const themes = getThemes()
