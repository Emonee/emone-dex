import TypeChip from '@/components/text/TypeChip'
import { sanitizeType } from '@/lib/sanitizeStrings'
import { Type } from '@/types/types'
import { type FC } from 'react'

type PokemonTypeChipsType = {
  types: [Type] | [Type, Type]
}

const PokemonTypeChips: FC<PokemonTypeChipsType> = ({ types }) => {
  const typeNames = types.map(({ type: { name } }) => sanitizeType(name)) as [string] | [string, string]
  return (
    <section className='flex justify-center items-center gap-3 mb-10'>
      {
        typeNames[0] === typeNames[1]
          ? <TypeChip type={typeNames[0]}>{typeNames[0]}</TypeChip>
          : typeNames.map(type => <TypeChip key={type} type={type}>{type}</TypeChip>)
      }
    </section>
  )
}

export default PokemonTypeChips
