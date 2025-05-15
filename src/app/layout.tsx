import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Capputenno',
  description: 'Layout capputeeno'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_br">
      <body>{children}</body>
    </html>
  )
}
