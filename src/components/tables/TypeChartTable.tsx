import types from '@/resources/iii_gen_types.json'
import { type TypeData } from '@/types/types'
import Image from 'next/image'

const isProduction = process.env.NODE_ENV === 'production'

export default function TypeChartTable () {
  return (
    <table className='block bg-slate-800 mx-auto w-fit'>
      <tbody className='text-sm'>
        <tr className='sticky top-0'>
          <th className='sticky left-0 z-auto p-3 bg-slate-800'><div className='w-[20px] h-[20px]' /></th>
          {types.map(({ name }) => (
            <th key={name} className='bg-slate-800 p-3 capitalize'>
              <Image className='mx-auto' src={`${isProduction ? '/emone-dex' : ''}/images/type_icons/${name}_icon.png`} height={20} width={20} alt={`${name} icon`} />
            </th>
          ))}
        </tr>
        {types.map(type1 => (
          <tr key={type1.id}>
            <th className='sticky left-0 p-3 bg-slate-800 capitalize min-w-fit'>
              <Image src={`${isProduction ? '/emone-dex' : ''}/images/type_icons/${type1.name}_icon.png`} height={20} width={20} alt={`${type1.name} icon`} />
            </th>
            {types.map(type2 => {
              const weakness = getWeakness(type1, type2)
              const styleClass = {
                '2x': 'bg-green-600',
                '1/2x': 'bg-red-600',
                '0x': 'bg-black',
                '1x': 'bg-white'
              }
              return <td key={type2.id} className={`py-2 px-3 text-center border font-bold ${styleClass[weakness]}`}>{weakness}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function getWeakness (type1: TypeData, type2: TypeData) {
  const {
    damage_relations: {
      double_damage_from: doubleDamageFrom,
      half_damage_from: halfDamageFrom,
      no_damage_from: noDamageFrom
    }
  } = type2
  if (doubleDamageFrom.some(type => type.name === type1.name)) return '2x'
  if (halfDamageFrom.some(type => type.name === type1.name)) return '1/2x'
  if (noDamageFrom.some(type => type.name === type1.name)) return '0x'
  return '1x'
}
