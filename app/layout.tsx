import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PlombiPro - Expert en Plomberie et Chauffage',
  description: 'Expert en plomberie, chauffage et dépannage en France. Intervention rapide 24h/7j, devis gratuit.',
  keywords: 'plomberie, chauffage, dépannage, fuite, canalisation, chaudière, France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}