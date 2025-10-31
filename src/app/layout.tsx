import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'متاجركم - منصتك الذكية للتجارة الإلكترونية',
  description: 'حل Smart White Label متكامل يربط التجار والعملاء في مكان واحد. ابدأ متجرك الإلكتروني اليوم بأدوات احترافية وسهلة الاستخدام',
  keywords: 'تجارة إلكترونية، متجر إلكتروني، متاجركم، متجرك، Smart White Label',
  authors: [{ name: 'متاجركم Team' }],
  creator: 'متاجركم',
  publisher: 'متاجركم',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codebh.pages.dev/'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'متاجركم - منصتك الذكية للتجارة الإلكترونية',
    description: 'حل Smart White Label متكامل يربط التجار والعملاء في مكان واحد',
    url: 'https://codebh.pages.dev/',
    siteName: 'متاجركم',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'متاجركم - منصتك الذكية للتجارة الإلكترونية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'متاجركم - منصتك الذكية للتجارة الإلكترونية',
    description: 'حل Smart White Label متكامل يربط التجار والعملاء في مكان واحد',
    images: ['/og-image.jpg'],
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="min-h-screen bg-light-gradient dark:bg-gray-900 transition-all duration-500" suppressHydrationWarning>
          <ThemeProvider>
            <LanguageProvider>
              <Header />
              <main className="pt-18">
                {children}
              </main>
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}