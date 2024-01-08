import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
const inter = Inter({ subsets: ['latin'] })
import { Theme } from '@radix-ui/themes';

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
      <body className={`${inter.className} h-full`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}
