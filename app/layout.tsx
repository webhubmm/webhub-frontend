
import '@/styles/globals.css'
import '@/styles/style.css'
import type { Metadata } from 'next'
import { SidebarContextProvider } from '@/contexts/AdminSidebarContext';
import Navbar from '@/components/navbar/Navbar';


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
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>

    </SidebarContextProvider>

  )
}
