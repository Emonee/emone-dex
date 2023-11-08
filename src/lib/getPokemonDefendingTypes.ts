import pokemonTypesJson from '@/resources/iii_gen_types.json'
import { type Pokemon } from '@/types/types'
import { sanitizeType } from './sanitizeTypes'

export function getPokemonDefendingTypes (pokemonData: Pokemon) {
  const [firstType, secondType] = pokemonData.types.map(({ type: { name } }) => sanitizeType(name)) as [string] | [string, string]
  const firstTypeData = pokemonTypesJson.find(type => type.name === firstType)
  if (!firstTypeData) throw new Error(`Type not found: ${firstType}`)
  const secondTypeData = secondType && pokemonTypesJson.find(type => type.name === secondType)
  const typeEff = Object.fromEntries(pokemonTypesJson.map(type => [type.name, 1]))
  for (const type of firstTypeData.damage_relations.double_damage_from) typeEff[type.name] *= 2
  for (const type of firstTypeData.damage_relations.half_damage_from) typeEff[type.name] *= 0.5
  for (const type of firstTypeData.damage_relations.no_damage_from) typeEff[type.name] *= 0
  if (secondTypeData) {
    for (const type of secondTypeData.damage_relations.double_damage_from) typeEff[type.name] *= 2
    for (const type of secondTypeData.damage_relations.half_damage_from) typeEff[type.name] *= 0.5
    for (const type of secondTypeData.damage_relations.no_damage_from) typeEff[type.name] = 0
  }
  return {
    typeEff
  }
}
