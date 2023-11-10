'use client'

import pokemonJsonData from '@/resources/pokemon_list.json'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const pokemons = pokemonJsonData.results

export default function Home () {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function setQueryParamSearch (searchString: string) {
    const params = new URLSearchParams(searchParams)
    searchString ? params.set('search', searchString) : params.delete('search')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <header className='backdrop-blur-sm sticky top-0 py-6 shadow-2xl'>
        <input
          type='text'
          defaultValue={searchParams.get('search')?.toString()}
          onChange={(e) => setQueryParamSearch(e.target.value)}
          placeholder='Search a Pokemon (Gen III)'
          className='block mx-auto text-slate-800 rounded-lg p-2 text-xl'
        />
      </header>
      <main className='px-5 py-10'>
        <section className='flex flex-wrap justify-center items-center gap-5'>
          {pokemons.map(({ name }) => (
            <Link
              key={name}
              href={name}
              className={`block w-32 p-2 border rounded-lg text-center capitalize bg-slate-800 hover:bg-slate-700 transition-[background-color] ${!name.toLowerCase().includes(searchParams.get('search')?.toString().toLowerCase() ?? '') ? 'hidden' : ''}`}
            >
              {name}
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}
