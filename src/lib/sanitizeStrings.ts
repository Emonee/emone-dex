export function sanitizeType (typeName: string) {
  return typeName === 'fairy' ? 'normal' : typeName
}

export function sanitizeStatName (statName: string) {
  return statName.replace('-', ' ')
}
