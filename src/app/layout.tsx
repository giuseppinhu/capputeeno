import type { Metadata } from 'next'
import './globals.css'
import { saira } from '../variables/fonts'

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
      <body className={saira.className}>{children}</body>
    </html>
  )
}
