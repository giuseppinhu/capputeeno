import type { Metadata } from 'next'

import './globals.css'
import { saira } from '../variables/fonts'
import { CartProvider } from '@/context/cart'

export const metadata: Metadata = {
  title: 'Capputeenno',
  description: 'Layout capputeeno'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_BR">
      <body className={saira.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
