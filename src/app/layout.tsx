import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from './components/Container'
import Providers from './providers/Providers'
import siteConfig from '../../config/site'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: '',
        width: 1200,
        height: 628
      }
    ],
    locale: 'pt-BR',
    type: 'website'
  },
  verification: {
    google: 'MxMj1CaliRbJ6G7cp0eIYXug0QF6hyugQ1P74T6sCzc'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-N14QDF50E0"></Script>
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N14QDF50E0');`}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className={inter.className}>
        <Providers>
          <Toaster />
          <Header />
          <Container>
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
