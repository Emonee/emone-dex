import pokemonJsonData from '@/resources/pokemon_list.json'
import Link from 'next/link'

const pokemons = pokemonJsonData.results

export default function Home () {
  return (
    <main className='flex flex-wrap justify-center items-center gap-5 p-5'>
      {pokemons.map((pokemon) => (
        <Link
          key={pokemon.name}
          href={pokemon.name}
          className='block w-32 p-2 border rounded-lg text-center capitalize bg-slate-800 hover:bg-slate-700 transition-[background-color]'
        >
          {pokemon.name}
        </Link>
      ))}
    </main>
  )
}
