import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Roboto, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})
const openSans = Open_Sans({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-opensans'
})

export const metadata: Metadata = {
  title: 'ניר פרידמן - שחקן, זמר, מדבב, יוצר',
  description: 'ניר פרידמן - שחקן, זמר, מדבב ויוצר ישראלי. מגלה את העוצמה שמאחורי הקול והבמה. אולפן הקלטות מקצועי לדיבוב ופודקאסטים.',
  keywords: 'ניר פרידמן, שחקן, זמר, מדבב, דיבוב, פודקאסט, אולפן הקלטות, פלורנטין, עניין של זמן',
  authors: [{ name: 'Nir Friedman' }],
  openGraph: {
    title: 'ניר פרידמן - שחקן, זמר, מדבב, יוצר',
    description: 'עולם של קול, במה ומוזיקה – במקום אחד',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${bebasNeue.variable} ${roboto.variable} ${openSans.variable} bg-stage-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 