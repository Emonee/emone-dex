'use client'

import PkmSmallLinkCard from '@/components/cards/PkmSmallLinkCard'
import useFavoritePokemons from '@/hooks/useFavoritePokemons'

export default function Favorites () {
  const { favoritePokemons } = useFavoritePokemons()
  return (
    <main className='p-5'>
      <h2 className='text-center text-4xl mb-9'>Favorite Pokemons</h2>
      <ul className='max-w-[700px] flex flex-wrap justify-center items-center mx-auto gap-4'>
        {favoritePokemons.map(pkm => (
          <li key={pkm.name}><PkmSmallLinkCard pkm={pkm} /></li>
        ))}
      </ul>
    </main>
  )
}
