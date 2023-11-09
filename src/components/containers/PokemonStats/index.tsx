import StatPropgressBar from '@/components/progress/StatPropgressBar'
import { type Stat } from '@/types/types'
import { type FC } from 'react'

type PokemonStatsType = {
  stats: Stat[]
}

const PokemonStats: FC<PokemonStatsType> = ({ stats }) => {
  return (
    <section className='flex justify-center items-center flex-col gap-2 mb-16 px-7 pb-7 pt-5 w-fit max-w-full mx-auto rounded-3xl bg-slate-800'>
      <h3 className='text-center text-2xl'>Base stats:</h3>
      {stats.map(stat => <StatPropgressBar key={stat.stat.name} stat={stat} />)}
    </section>
  )
}

export default PokemonStats
