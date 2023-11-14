'use client'

import useFavoritePokemons from '@/hooks/useFavoritePokemons'
import { type Pokemon } from '@/types/types'

export default function AddFavoritePkmButton ({ pkm }: { pkm: Pokemon['name'] }) {
  const { toogleFavoritePkm, favoritePokemons } = useFavoritePokemons()
  const isPkmFavorite = favoritePokemons.some(({ name }) => name === pkm)
  const extraClass = isPkmFavorite
    ? 'bg-slate-50 border'
    : 'bg-transparent border'

  return (
    <button
      onClick={() => toogleFavoritePkm(pkm)}
      className={`block px-4 py-2 rounded-lg mx-auto ${extraClass}`}
    >
      {isPkmFavorite ? '❤️' : '⭐'}
    </button>
  )
}
