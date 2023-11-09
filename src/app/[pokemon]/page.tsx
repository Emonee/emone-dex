import PokemonStats from '@/components/containers/PokemonStats'
import PokemonTypeChips from '@/components/containers/PokemonTypeChipsType'
import TypeEffectiveness from '@/components/containers/TypeEffectiveness'
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

  const pkmNumber = pokemonList.findIndex((pkm) => pokemon === pkm.name) + 1
  const [pokemonNameForBulbapedia] = pokemon.split('-')

  return (
    <main className='p-5'>
      <header className='flex justify-center items-center gap-4'>
        <Image src={pkmDataJson.sprites.front_default} height={96} width={96} alt={`${pokemon} sprite image`} />
        <h2 className='capitalize text-center text-4xl my-5'><b>{pokemon}</b> <span className='text-base italic'>#{pkmNumber}</span></h2>
      </header>
      <PokemonTypeChips types={pkmDataJson.types} />
      <PokemonStats stats={pkmDataJson.stats} />
      <TypeEffectiveness types={pkmDataJson.types} />
      <section className='flex justify-center items-center gap-8'>
        <a className='capitalize' href={`https://bulbapedia.bulbagarden.net/wiki/${pokemonNameForBulbapedia}_(Pok%C3%A9mon)#Game_locations`} target='_blank'>{pokemon} Locations</a>
        <a className='capitalize' href={`https://bulbapedia.bulbagarden.net/wiki/${pokemonNameForBulbapedia}_(Pok%C3%A9mon)/Generation_III_learnset#By_leveling_up`} target='_blank'>{pokemon} Moves III</a>
      </section>
    </main>
  )
}
