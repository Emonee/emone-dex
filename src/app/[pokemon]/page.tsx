import { getPokemonDefendingTypes } from '@/lib/getPokemonDefendingTypes'
import { sanitizeType } from '@/lib/sanitizeTypes'
import pokemonsData from '@/resources/pokemon_list.json'
import { type Pokemon } from '@/types/types'
import Image from 'next/image'

const pokemonList = pokemonsData.results

export async function generateStaticParams () {
  return pokemonList.map(pkm => ({ pokemon: pkm.name }))
}

export default async function Page ({ params: { pokemon } }: { params: { pokemon: string } }) {
  const pkmDataRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const pkmDataJson = await pkmDataRes.json() as Pokemon
  const { typeEff } = getPokemonDefendingTypes(pkmDataJson)

  const pkmNumber = pokemonList.findIndex((pkm) => pokemon === pkm.name) + 1
  const [pokemonNameForBulbapedia] = pokemon.split('-')

  return (
    <>
      <h2>{pkmNumber}: {pokemon}</h2>
      <Image src={pkmDataJson.sprites.front_default} height={96} width={96} alt={`${pokemon} sprite image`} />
      <p>Types: {sanitizeType(pkmDataJson.types[0].type.name)} / {sanitizeType(pkmDataJson.types[1]?.type.name)}</p>
      <p>
        HP:
        <progress className='block' max='200' value={pkmDataJson.stats[0].base_stat}>{pkmDataJson.stats[0].base_stat}</progress>
      </p>
      <p>
        Atack:
        <progress className='block' max='200' value={pkmDataJson.stats[1].base_stat}>{pkmDataJson.stats[1].base_stat}</progress>
      </p>
      <p>
        Defense:
        <progress className='block' max='200' value={pkmDataJson.stats[2].base_stat}>{pkmDataJson.stats[2].base_stat}</progress>
      </p>
      <p>
        Sp. Atack:
        <progress className='block' max='200' value={pkmDataJson.stats[3].base_stat}>{pkmDataJson.stats[3].base_stat}</progress>
      </p>
      <p>
        Sp. Defense:
        <progress className='block' max='200' value={pkmDataJson.stats[4].base_stat}>{pkmDataJson.stats[4].base_stat}</progress>
      </p>
      <p>
        Speed:
        <progress className='block' max='200' value={pkmDataJson.stats[5].base_stat}>{pkmDataJson.stats[5].base_stat}</progress>
      </p>
      <p><a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemonNameForBulbapedia}_(Pok%C3%A9mon)`} target='_blank'>Detailed pedia</a></p>
      <p><a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemonNameForBulbapedia}_(Pok%C3%A9mon)/Generation_III_learnset#By_leveling_up`} target='_blank'>Moves III</a></p>
      {Object.entries(typeEff).map(([type, damageMultiplier]) =>
        damageMultiplier !== 1 && <p key={type}>{type}: x{damageMultiplier}</p>
      )}
    </>
  )
}
