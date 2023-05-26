
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Tahoma Hacks 2023',
  description: 'Tahoma Hacks 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

  )
}
