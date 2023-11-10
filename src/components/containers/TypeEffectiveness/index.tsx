import TypeChip from '@/components/text/TypeChip'
import { getEffectivinessByTypes } from '@/lib/getEffectivinessByTypes'
import { Type } from '@/types/types'
import { type FC } from 'react'

type TypeEffectivenessType = {
  types: Type[]
}

const TypeEffectiveness: FC<TypeEffectivenessType> = ({ types }) => {
  const { typeEff } = getEffectivinessByTypes(types)
  return (
    <section className='mb-16 px-7 pb-7 pt-5 w-fit mx-auto rounded-3xl bg-slate-800 max-w-[700px]'>
      <h3 className='text-center text-2xl mb-5'>Type effectiveness:</h3>
      <div className='flex justify-center items-center flex-wrap gap-3 w-fit mx-auto'>
        {
          Object.entries(typeEff).map(([type, damageMultiplier]) =>
            damageMultiplier !== 1 && <TypeChip key={type} type={type}>{type} <span className='lowercase text-sm italic font-normal'>x{damageMultiplier}</span></TypeChip>
          )
        }
      </div>
    </section>
  )
}

export default TypeEffectiveness
