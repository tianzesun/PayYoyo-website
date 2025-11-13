import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CookieConsent } from '@/components/ui/cookie-consent'
import { LazyMotion, domAnimation } from 'framer-motion'
import Script from 'next/script'

// Use system fonts as fallback when Google Fonts is not available
const fontClassName = 'font-sans'

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'PayYoYo - AI Gift Card Wallet | Save $636 Annually',
    template: '%s | PayYoYo'
  },
  description: 'Transform unused gift cards into $636 annual savings. AI-powered location-aware payments with GPS triggers and intelligent recommendations. Join 2,547+ users saving money automatically.',
  keywords: [
    'gift card optimizer',
    'AI payments',
    'location-based wallet',
    'mobile payments',
    'save money shopping',
    'gift card wallet',
    'smart payments',
    'GPS enhanced payments',
    'autonomous wallet'
  ],
  authors: [{ name: 'AydenAIT Solutions', url: 'https://payyoyo.com' }],
  creator: 'AydenAIT Solutions',
  publisher: 'AydenAIT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://payyoyo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-CA': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://payyoyo.com',
    title: 'PayYoYo - AI Gift Card Wallet | Save $636 Annually',
    description: 'Transform unused gift cards into $636 annual savings. AI-powered location-aware payments with GPS triggers.',
    siteName: 'PayYoYo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PayYoYo - AI-Powered Gift Card Wallet',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayYoYo - AI Gift Card Wallet | Save $636 Annually',
    description: 'Transform unused gift cards into $636 annual savings with AI-powered smart payments.',
    images: ['/twitter-card.jpg'],
    creator: '@PayYoYo',
    site: '@PayYoYo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1E40AF' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PayYoYo',
    url: 'https://payyoyo.com',
    logo: 'https://payyoyo.com/logo.png',
    description: 'AI-powered autonomous payment platform that eliminates payment friction through GPS intelligence and machine learning optimization.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/PayYoYo',
      'https://linkedin.com/company/payyoyo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'CA',
      availableLanguage: 'English',
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1E40AF" />
        <meta name="msapplication-TileColor" content="#1E40AF" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className={`${fontClassName} text-gray-900 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Skip to main content
        </a>

        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
        <CookieConsent />

        <Script strategy="afterInteractive" id="performance-monitoring">
          {`
            if ('performance' in window && 'PerformanceObserver' in window) {
              try {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      if (window.gtag) {
                        window.gtag('event', 'lcp', {
                          value: Math.round(entry.startTime),
                        });
                      }
                    }
                  }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
              } catch (e) {
                console.warn('Performance observer not supported');
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
