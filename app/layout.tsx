import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ניר פרידמן - שחקן, זמר, מדבב ויוצר',
  description: 'האתר הרשמי של ניר פרידמן - שחקן, זמר, מדבב ויוצר ישראלי. דיבוב מקצועי, הקלטות פודקאסט, קריינות ומוזיקה.',
  keywords: 'ניר פרידמן, דיבוב, שחקן, זמר, מדבב, קריינות, פודקאסט, מוזיקה, ישראל',
  authors: [{ name: 'ניר פרידמן' }],
  creator: 'אלעד קרן',
  publisher: 'ניר פרידמן',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ניר פרידמן - שחקן, זמר, מדבב ויוצר',
    description: 'האתר הרשמי של ניר פרידמן - שחקן, זמר, מדבב ויוצר ישראלי. דיבוב מקצועי, הקלטות פודקאסט, קריינות ומוזיקה.',
    url: 'https://nir-friedman.vercel.app',
    siteName: 'ניר פרידמן',
    images: [
      {
        url: '/nir.jpg',
        width: 1200,
        height: 630,
        alt: 'ניר פרידמן',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ניר פרידמן - שחקן, זמר, מדבב ויוצר',
    description: 'האתר הרשמי של ניר פרידמן - שחקן, זמר, מדבב ויוצר ישראלי.',
    images: ['/nir.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Add passive event listeners for better performance
              if (typeof window !== 'undefined') {
                // Override addEventListener to add passive by default for scroll events
                const originalAddEventListener = EventTarget.prototype.addEventListener;
                EventTarget.prototype.addEventListener = function(type, listener, options) {
                  // Only add passive for scroll events, not for input events
                  if ((type === 'scroll' || type === 'wheel' || type === 'touchstart' || type === 'touchmove') && 
                      !this.matches && !this.closest && !this.tagName) {
                    if (options === undefined) {
                      options = { passive: true };
                    } else if (typeof options === 'object') {
                      options.passive = true;
                    } else if (typeof options === 'boolean') {
                      options = { passive: true, capture: options };
                    }
                  }
                  return originalAddEventListener.call(this, type, listener, options);
                };

                // Add passive listeners only to window and document
                document.addEventListener('DOMContentLoaded', function() {
                  // Only add to window and document, not to form elements
                  window.addEventListener('scroll', () => {}, { passive: true });
                  window.addEventListener('wheel', () => {}, { passive: true });
                  window.addEventListener('touchstart', () => {}, { passive: true });
                  window.addEventListener('touchmove', () => {}, { passive: true });
                  
                  document.addEventListener('scroll', () => {}, { passive: true });
                  document.addEventListener('wheel', () => {}, { passive: true });
                  document.addEventListener('touchstart', () => {}, { passive: true });
                  document.addEventListener('touchmove', () => {}, { passive: true });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${openSans.variable} font-opensans antialiased`}>
        {children}
      </body>
    </html>
  )
} 