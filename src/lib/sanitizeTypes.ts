export function sanitizeType (typeName: string | undefined) {
  if (!typeName) return null
  return typeName === 'fairy' ? 'normal' : typeName
}
