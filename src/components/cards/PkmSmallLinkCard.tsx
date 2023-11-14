import { type Pokemon } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

export default function PkmSmallLinkCard ({ pkm }: { pkm: Pokemon }) {
  return (
    <Link href={`/${pkm.name}`} className='flex items-center gap-4 bg bg-slate-800 hover:bg-slate-700 rounded-lg transition-[background-color] w-[250px] p-2'>
      <Image src={pkm.sprites.front_default} height={68} width={68} alt={`${pkm.name} sprite image`} />
      <p className='text-xl capitalize'>{pkm.name}</p>
    </Link>
  )
}
