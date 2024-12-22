import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'ANC - Ahmed Yoosuf Al Nujaidhi Contracting Est.',
  description: 'Leading contracting company in Al Khobar, Saudi Arabia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

