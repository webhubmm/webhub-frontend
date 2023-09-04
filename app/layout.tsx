import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SidebarContextProvider } from '@/contexts/AdminSidebarContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WEBHUB Myanmar',
  description: 'WEBHUB Myanmar leads software development services ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarContextProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

    </SidebarContextProvider>

  )
}
