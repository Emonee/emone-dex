'use client'

import pokemonJsonData from '@/resources/pkm_list.json'
import types from '@/resources/iii_gen_types.json'
import { type Pokemon } from '@/types/types'
import Link from 'next/link'
import { useState } from 'react'
import { capitalizeFirstLetter } from '@/lib/sanitizeStrings'

const pokemons = pokemonJsonData as Pokemon[]

export default function Home () {
  const [searchValue, setSearchValue] = useState('')
  const [typeSearch, setTypeSearch] = useState('')

  const filteredPokemons = pokemons.filter(({ name, types }) => {
    return name.toLowerCase().includes(searchValue.toLowerCase()) && types.some(({ type: { name } }) => typeSearch ? name === typeSearch : true)
  })

  return (
    <>
      <header className='backdrop-blur-sm sticky top-0 py-6 px-5 shadow-2xl backdrop-brightness-50 flex justify-center items-center flex-wrap gap-3'>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search a Pokemon (Gen III)'
          className='block text-slate-800 rounded-lg p-2 text-xl max-w-full'
        />
        <select
          onChange={(e) => setTypeSearch(e.target.value)}
          className='block text-slate-800 rounded-lg p-2 text-xl max-w-full'
        >
          <option value=''>Type search</option>
          {types.map(type => (
            <option key={type.id} value={type.name} className='capitalize'>{capitalizeFirstLetter(type.name)}</option>
          ))}
        </select>
        <Link href='/favorites'>⭐</Link>
      </header>
      <main className='px-5 py-10'>
        <section className='flex flex-wrap justify-center items-center gap-5'>
          {filteredPokemons.map(({ name }) => (
            <Link
              key={name}
              href={name}
              className='block w-32 p-2 border rounded-lg text-center capitalize bg-slate-800 hover:bg-slate-700 transition-[background-color]'
            >
              {name}
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
