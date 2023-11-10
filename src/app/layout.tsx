import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const isProduction = process.env.NODE_ENV === 'production'

export const metadata: Metadata = {
  title: 'Emone Dex',
  description: 'Gen III Pokedex with pokemon type effectiviness',
  manifest: isProduction ? '/emone-dex/site.webmanifest' : '/dev/site.webmanifest'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen bg-slate-900 text-white text-lg`}>{children}</body>
    </html>
  )
}
