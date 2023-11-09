import { sanitizeStatName } from '@/lib/sanitizeStrings'
import { type Stat } from '@/types/types'
import { type FC } from 'react'

type StatPropgressBarType = {
  stat: Stat
}

const MAX_VALUES_PER_STAT: { [key: string]: number } = {
  hp: 255,
  attack: 180,
  defense: 230,
  'special-attack': 180,
  'special-defense': 230,
  speed: 180
}

const StatPropgressBar: FC<StatPropgressBarType> = ({ stat: { base_stat: baseStat, stat: { name } } }) => {
  return (
    <label className='block'>
      <p className='capitalize italic'>{sanitizeStatName(name)}</p>
      <progress
        max={MAX_VALUES_PER_STAT[name]}
        value={baseStat}
        className={`block ${name} custom-progress rounded-full appearance-none w-[300px] max-w-full h-5`}
      >
        {baseStat} / {MAX_VALUES_PER_STAT[name]}
      </progress>
    </label>
  )
}

export default StatPropgressBar
