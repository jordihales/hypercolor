import { gradients } from './gradients'

function getThemes() {
  const filteredThemes = gradients.filter((g, i, s) => s.findIndex((cg) => cg.theme === g.theme) === i)

  filteredThemes.unshift({
    theme: 'All',
    colors: 'bg-gradient-to-r from-green-400 to-green-600',
  })

  return filteredThemes
}

export const themes = getThemes()
