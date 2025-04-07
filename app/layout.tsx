import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Qasly Media - Professional Media Agency',
  description: 'Professional media agency delivering premium web development, video editing and photo editing services for brands that want to stand out.',
  icons: {
    icon: '/logo.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#6366F1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-qasly-light text-qasly-dark`}>
        {children}
      </body>
    </html>
  )
} 