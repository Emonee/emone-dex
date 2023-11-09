import { FC, ReactNode } from 'react'

type TypeChipProps = {
  children?: ReactNode
  type: string
}

const BASE_CLASS = 'px-3 py-1 capitalize font-bold rounded-full w-fit'
const bgClassByType: { [key: string]: string } = {
  normal: 'bg-normal',
  fighting: 'bg-fighting',
  flying: 'bg-flying',
  poison: 'bg-poison',
  ground: 'bg-ground',
  rock: 'bg-rock',
  bug: 'bg-bug',
  ghost: 'bg-ghost',
  steel: 'bg-steel',
  fire: 'bg-fire',
  water: 'bg-water',
  grass: 'bg-grass',
  electric: 'bg-electric',
  psychic: 'bg-psychic',
  ice: 'bg-ice',
  dragon: 'bg-dragon',
  dark: 'bg-dark'
}

const TypeChip: FC<TypeChipProps> = ({ type = 'normal', children }) => {
  return (
    <p className={`${BASE_CLASS} ${bgClassByType[type]}`} style={{ textShadow: '0 0 11px black' }}>
      {children}
    </p>
  )
}

export default TypeChip
