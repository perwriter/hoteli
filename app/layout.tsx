import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bucca di Beppo - Authentic Italian Restaurant',
  description: 'Experience authentic Italian cuisine at Bucca di Beppo, where every dish tells a story.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f0e8]`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
