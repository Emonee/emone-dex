import { sanitizeType } from '@/lib/sanitizeStrings'
import { type Pokemon } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

export default function PkmSmallLinkCard ({ pkm }: { pkm: Pokemon }) {
  const typeNames = pkm.types.map(({ type: { name } }) => sanitizeType(name)) as [string] | [string, string]

  return (
    <Link href={`/${pkm.name}`} className='flex items-center gap-4 bg bg-slate-800 hover:bg-slate-700 rounded-lg transition-[background-color] w-[350px] p-2'>
      <Image src={pkm.sprites.front_default} height={68} width={68} alt={`${pkm.name} sprite image`} />
      <p className='text-xl capitalize'>{pkm.name}</p>
      <div className='flex flex-col justify-center items-center ml-auto gap-3'>
        {typeNames[0] === typeNames[1]
          ? <Image src={`/images/type_icons/${typeNames[0]}_icon.png`} height={20} width={20} alt={`${typeNames[0]} icon`} />
          : typeNames.map(name => (
            <Image key={name} src={`/images/type_icons/${name}_icon.png`} height={20} width={20} alt={`${name} icon`} />
          ))}
      </div>
    </Link>
  )
}
