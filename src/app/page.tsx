'use client'

import pokemonJsonData from '@/resources/pokemon_list.json'
import Link from 'next/link'
import { useState } from 'react'

const pokemons = pokemonJsonData.results

export default function Home () {
  const [searchInpValue, setSearchInpValue] = useState('')
  return (
    <main className='p-5'>
      <input
        type='text'
        value={searchInpValue}
        onChange={(e) => setSearchInpValue(e.target.value)}
        placeholder='Search a Pokemon (Gen III)'
        className='block mx-auto mb-4 text-slate-800 rounded-lg p-2 text-xl'
      />
      <section className='flex flex-wrap justify-center items-center gap-5'>
        {pokemons.map(({ name }) => (
          <Link
            key={name}
            href={name}
            className={`block w-32 p-2 border rounded-lg text-center capitalize bg-slate-800 hover:bg-slate-700 transition-[background-color] ${!name.toLowerCase().includes(searchInpValue.toLowerCase()) ? 'hidden' : ''}`}
          >
            {name}
          </Link>
        ))}
      </section>
    </main>
  )
}
