import pokemonJsonData from '@/resources/pkm_list.json'
import { type Pokemon } from '@/types/types'
import { useEffect, useState } from 'react'

const FAVORITE_POKEMONS_LOCAL_STORAGE_KEY = 'FAVORITE_POKEMONS'
const pokemons = pokemonJsonData as Pokemon[]

export default function useFavoritePokemons () {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    const favoritePokemonJson = window.localStorage.getItem(FAVORITE_POKEMONS_LOCAL_STORAGE_KEY)
    if (!favoritePokemonJson) return
    const pokemonList = (JSON.parse(favoritePokemonJson) as string[])
      .map(pkm => {
        const pkmData = pokemons.find(pkmData => pkmData.name === pkm)
        if (!pkmData) throw new Error('pkm_not_found')
        return pkmData
      })
    setFavoritePokemons(pokemonList)
  }, [])

  function toogleFavoritePkm (name: Pokemon['name']) {
    const favoritePokemonJson = new Set((JSON.parse(window.localStorage.getItem(FAVORITE_POKEMONS_LOCAL_STORAGE_KEY) ?? '[]') as Array<Pokemon['name']>))
    favoritePokemonJson.has(name) ? favoritePokemonJson.delete(name) : favoritePokemonJson.add(name)
    const newFavoritePkm = [...favoritePokemonJson]
    window.localStorage.setItem(FAVORITE_POKEMONS_LOCAL_STORAGE_KEY, JSON.stringify(newFavoritePkm))
    setFavoritePokemons(newFavoritePkm.map(pkm => {
      const pkmData = pokemons.find(pkmData => pkmData.name === pkm)
      if (!pkmData) throw new Error('pkm_not_found')
      return pkmData
    }))
  }

  return {
    favoritePokemons,
    toogleFavoritePkm
  }
}
