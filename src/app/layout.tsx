import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emone Dex',
  description: 'Gen III Pokedex with pokemon type effectiviness',
  manifest: '/site.webmanifest'
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
