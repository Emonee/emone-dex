import pokemonJsonData from '@/resources/pokemon_list.json'
import Link from 'next/link'

const pokemons = pokemonJsonData.results

export default function Home () {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <p><Link href={pokemon.name}>{pokemon.name}</Link></p>
        </div>
      ))}
    </>
  )
}
