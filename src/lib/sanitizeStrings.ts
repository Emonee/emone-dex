export function sanitizeType (typeName: string) {
  return typeName === 'fairy' ? 'normal' : typeName
}

export function sanitizeStatName (statName: string) {
  return statName.replace('-', ' ')
}

export function capitalizeFirstLetter (string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
