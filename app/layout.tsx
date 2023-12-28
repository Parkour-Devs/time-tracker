import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | Parkour Devs',
  description: 'Tablero Interno para colaboradores de la organización Parkour Devs.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
