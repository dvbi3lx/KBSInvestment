import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { Background } from "@/components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kbsinvestment.pl'),
  title: "KBS Investment - Profesjonalne usługi instalacyjne",
  description: "KBS Investment oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych - od projektowania po realizację, z gwarancją jakości i terminowości.",
  keywords: "instalacje, instalacje gazowe, instalacje grzewcze, instalacje elektryczne, KBS Investment",
  authors: [{ name: "KBS Investment" }],
  creator: "KBS Investment",
  publisher: "KBS Investment",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://kbsinvestment.pl',
    title: 'KBS Investment - Profesjonalne usługi instalacyjne',
    description: 'KBS Investment oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych.',
    siteName: 'KBS Investment',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'KBS Investment Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KBS Investment - Profesjonalne usługi instalacyjne',
    description: 'KBS Investment oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kbsinvestment.pl',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a3b6d' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />

        {/* Performance hints */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KBS Investment" />
      </head>
      <body className="antialiased">
        <NavBar />
        <ScrollProgress />
        <Background />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>


      </body>
    </html>
  );
}
