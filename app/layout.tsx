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
                  if (type === 'scroll' || type === 'wheel' || type === 'touchstart' || type === 'touchmove') {
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

                // Add passive listeners to existing elements
                document.addEventListener('DOMContentLoaded', function() {
                  const addPassiveToElement = (element) => {
                    if (element.addEventListener) {
                      element.addEventListener('scroll', () => {}, { passive: true });
                      element.addEventListener('wheel', () => {}, { passive: true });
                      element.addEventListener('touchstart', () => {}, { passive: true });
                      element.addEventListener('touchmove', () => {}, { passive: true });
                    }
                  };

                  // Add to all existing elements
                  document.querySelectorAll('*').forEach(addPassiveToElement);

                  // Watch for new elements
                  const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                          addPassiveToElement(node);
                          if (node.querySelectorAll) {
                            node.querySelectorAll('*').forEach(addPassiveToElement);
                          }
                        }
                      });
                    });
                  });

                  observer.observe(document.body, {
                    childList: true,
                    subtree: true
                  });
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